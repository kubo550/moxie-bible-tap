import { Emotion, VerseQuote } from '@/types';

const verses = [
  {
    id: '1',
    caption: 'Psalm 140:1',
    quote: 'Rescue me, Lord, from evildoers; protect me from the violent.',
    type: 'devotional',
    emotion: Emotion.Sad
  },
  {
    id: '2',
    caption: 'Philippians 4:6',
    quote:
      'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    type: 'encouragement',
    emotion: Emotion.Anxious
  },
  {
    id: '3',
    caption: 'Matthew 5:4',
    quote: 'Blessed are those who mourn, for they will be comforted.',
    type: 'comfort',
    emotion: Emotion.Thankful
  },
  {
    id: '4',
    caption: 'Proverbs 3:5',
    quote: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    type: 'guidance',
    emotion: Emotion.Happy
  }
];

// TODO: Add Firebase configuration and initialization code here
export class DB {
  name: string;
  private static instance: DB;

  private constructor() {
    this.name = 'DB';
  }

  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }

  getVerses(): Promise<VerseQuote[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(verses);
      }, 100);
    });
  }

  getVerseById(quoteId: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const quote = verses.find((v) => v.id === quoteId);
        resolve(quote);
      }, 100);
    });
  }
}
