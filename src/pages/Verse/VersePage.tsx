import { useCallback, useEffect, useState } from 'react';
import { VerseQuote } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';
import { VerseQuoteComponent } from '@/components/VerseQuote';
import { QuoteDBProvider } from '@/infrastructure/firebase/QuotesDbRepository';

export const VersePage: React.FC = () => {
  const [verses, setVerses] = useState<VerseQuote[]>([]);
  const { verseId = '1', emotion } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const db = QuoteDBProvider.getInstance();
    db.fetchVerses().then((fetchedVerses) => {
      setVerses(fetchedVerses);
    });
  }, []);

  const currentIndex = verses.findIndex((v) => v.id.toLowerCase() === verseId.toLowerCase());

  const currentVerse = currentIndex >= 0 ? verses[currentIndex] : null;

  const getUrl = useCallback(
    (index: number) => {
      const verse = verses[index];
      return `/emotion/${emotion}/${verse.id}`;
    },
    [emotion, verses]
  );

  const onNextVerse = useCallback(() => {
    if (verses.length === 0) return;
    const nextIndex = (currentIndex + 1) % verses.length;
    navigate(getUrl(nextIndex), { replace: true });
  }, [verses, currentIndex, navigate, getUrl]);

  const onPrevVerse = useCallback(() => {
    if (verses.length === 0) return;
    const prevIndex = (currentIndex - 1 + verses.length) % verses.length;
    navigate(getUrl(prevIndex), { replace: true });
  }, [verses, currentIndex, navigate, getUrl]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 text-white">
      {!currentVerse ? (
        <h1 className="text-center text-3xl font-bold text-white">Loading...</h1>
      ) : (
        <VerseQuoteComponent
          verseQuote={currentVerse}
          onNextVerse={onNextVerse}
          onPrevVerse={onPrevVerse}
          count={verses.length}
          index={currentIndex}
        />
      )}
    </main>
  );
};
