import { Emotion, VerseQuote } from '@/types';
import { collection, getDocs } from 'firebase/firestore';
import { CacheProvider } from '@/infrastructure/firebase/CacheProvider';
import { firestore } from '@/infrastructure/firebase/firestore';

// TODO: Add Firebase configuration and initialization code here
export class QuoteDBProvider {
  private static instance: QuoteDBProvider;
  private QUOTES_COLLECTION_NAME = 'quotes';

  public static getInstance(): QuoteDBProvider {
    if (!QuoteDBProvider.instance) {
      QuoteDBProvider.instance = new QuoteDBProvider();
    }
    return QuoteDBProvider.instance;
  }

  public async fetchVerses(): Promise<VerseQuote[]> {
    const cachedVerses = CacheProvider.getInstance().getAllVerses();

    if (cachedVerses.length) {
      console.log('quotes - fetched from Cache', {
        count: cachedVerses.length
      });
      return cachedVerses;
    }

    const verses = await this.#fetchVerses();

    if (verses.length) {
      console.log('quotes - fetched from DB', { count: verses.length });
      CacheProvider.getInstance().addMultipleVerses(verses);
    }
    return verses;
  }

  public async fetchVerseById(id: string): Promise<VerseQuote | null> {
    const cachedVerses = CacheProvider.getInstance().getAllVerses();
    console.log('quotes - fetched from Cache', { cachedVerses });
    const verse = cachedVerses.find((verse) => verse.id?.toLowerCase() === id?.toLowerCase());

    if (verse) {
      console.log('quotes - fetched from Cache', { id });
      return verse;
    }
    const versesDocs = await this.#fetchVerses();

    if (versesDocs.length) {
      console.log('quotes - fetched from DB', { id });
      CacheProvider.getInstance().addMultipleVerses(versesDocs);
      const verse = versesDocs.find((verse) => verse.id === id);
      return verse || { id: '2137', caption: 'huj', quote: 'quote huj', type: 'devotional', emotion: Emotion.Happy }; // Default value if not found
    }

    return null;
  }

  async #fetchVerses() {
    const querySnapshot = await getDocs(collection(firestore, this.QUOTES_COLLECTION_NAME));
    return querySnapshot.docs
      .filter((doc) => {
        const data = doc.data() as VerseQuote;
        return data.type === 'devotional';
      })
      .map((doc) => doc.data() as VerseQuote);
  }
}
