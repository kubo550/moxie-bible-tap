import { FunctionComponent } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home, EmotionQuote, VersePage } from '@/pages';

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emotion/:emotion" element={<EmotionQuote />} />
      <Route path="/emotion/:emotion/:verseId" element={<VersePage />} />
    </Routes>
  );
};
