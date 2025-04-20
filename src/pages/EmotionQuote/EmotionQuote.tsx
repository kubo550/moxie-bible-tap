import { FunctionComponent } from 'react';
import { QuoteList } from '@/components/QuoteList';

export const EmotionQuote: FunctionComponent = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <QuoteList />
    </main>
  );
};
