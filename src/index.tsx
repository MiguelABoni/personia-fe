import { QueryProvider } from './layers/reactQuery/QueryProvider';
import { PageRoutes } from './pages';
import { theme } from './theme/theme';
import { Toaster } from 'sonner';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <Toaster closeButton position='top-center' richColors />
        <PageRoutes />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
