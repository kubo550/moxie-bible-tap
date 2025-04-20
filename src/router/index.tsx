import { FunctionComponent } from 'react';

import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './guards/RequireAuth';
import { Login, Home, Private, EmotionQuote, QuotePage } from '@/pages';

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emotion/:emotion" element={<EmotionQuote />} />
      <Route path="/emotion/:emotion/:quoteId" element={<QuotePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/protected"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
