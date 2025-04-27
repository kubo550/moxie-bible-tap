import React, { FunctionComponent, useEffect } from 'react';
import { QuoteList } from '@/components/QuoteList';
import { Emotion, VerseQuote } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';
import { isValidEmotion } from '@/utils';
import { QuoteDBProvider } from '@/infrastructure/firebase/QuotesDbRepository';
import Navbar from '@/components/Navbar';

export const EmotionQuote: FunctionComponent = () => {
  const [quotes, setQuotes] = React.useState<VerseQuote[]>([]);
  const db = QuoteDBProvider.getInstance();
  const { emotion = Emotion.Thankful } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (emotion && !isValidEmotion(emotion)) {
      navigate('/');
    }
  }, [emotion, navigate]);

  // *TODO: use react-query
  React.useEffect(() => {
    db.fetchVerses().then((data: VerseQuote[]) => {
      setQuotes(data);
    });
  }, [db]);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-50 text-black">
      <Navbar />
      <QuoteList quotes={quotes} emotion={emotion} />
    </main>
  );
};
