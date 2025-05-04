import './styles/index.css';

import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import { Router } from './router/router';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Navbar from '@/components/Navbar';
import { InstallPWAButton } from '@/components/InstallPWAButton';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Navbar />
          <InstallPWAButton />
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
