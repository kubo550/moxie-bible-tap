import React, { FunctionComponent, useEffect } from 'react';
import { QuoteList } from '@/components/QuoteList';
import { DB } from '@/infrastructure/firebase';
import { Emotion, VerseQuote } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';
import { isValidEmotion } from '@/utils';

export const EmotionQuote: FunctionComponent = () => {
  const [quotes, setQuotes] = React.useState<VerseQuote[]>([]);
  const db = DB.getInstance();
  const { emotion = Emotion.Thankful } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (emotion && !isValidEmotion(emotion)) {
      navigate('/');
    }
  }, [emotion, navigate]);

  // TODO: use react-query
  React.useEffect(() => {
    db.getVerses().then((data: VerseQuote[]) => {
      setQuotes(data);
    });
  }, [db]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <QuoteList quotes={quotes} emotion={emotion} />
    </main>
  );
};
