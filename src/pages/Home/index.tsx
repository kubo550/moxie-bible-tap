import { FunctionComponent } from 'react';
import { ReadMeButtons } from '@/components/ReadMeButtons';

export const Home: FunctionComponent = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-50 text-black">
      <ReadMeButtons />
    </main>
  );
};
