import { VerseQuote } from '@/types';

export class CacheProvider {
  private static instance: CacheProvider;
  private quotes = new Map<string, VerseQuote>();

  public static getInstance(): CacheProvider {
    if (!CacheProvider.instance) {
      CacheProvider.instance = new CacheProvider();
    }
    return CacheProvider.instance;
  }

  private addQuote(quote: VerseQuote) {
    this.quotes.set(quote.id, quote);
  }

  public addMultipleVerses(quotes: VerseQuote[]) {
    quotes.forEach((quote) => this.addQuote(quote));
  }

  public getVerseById(id: string): VerseQuote | null {
    return this.quotes.get(id) || null;
  }
  public getAllVerses() {
    return Array.from(this.quotes.values());
  }
}
