import { FunctionComponent, useEffect, useState } from 'react';
import { VerseQuote, VerseQuote as VerseQuoteType } from '@/types';
import { useParams } from 'react-router-dom';
import { DB } from '@/infrastructure/firebase';
import { VerseQuoteComponent } from '@/components/VerseQuote';

export const QuotePage: FunctionComponent = () => {
  const [quote, setQuote] = useState<VerseQuoteType | null>(null);
  const { quoteId = '1' } = useParams();

  const db = DB.getInstance();
  useEffect(() => {
    db.getVerseById(quoteId).then((quote: unknown) => {
      if (quote) {
        setQuote(quote as VerseQuote);
      } else {
        console.error('Quote not found');
      }
    });
  }, [db, quoteId]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 text-white">
      {!quote ? (
        <h1 className="text-center text-3xl font-bold text-white">Loading...</h1>
      ) : (
        <VerseQuoteComponent verseQuote={quote} />
      )}
    </main>
  );
};
