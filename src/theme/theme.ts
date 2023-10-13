import { ThemeOptions, createTheme } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4EA8D3',
    },
    secondary: {
      main: '#FFBF56',
    },
    error: {
      main: '#E40414',
    },
    success: {
      main: '#4caf50',
    },
    blueLight: {
      main: '#CDE9FB',
    },
    white: {
      main: '#FCFCFC',
    },
    black: {
      main: '#1B1B1B',
    },
    gray: {
      main: '#9FA7B2',
    },
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
    h1: {
      fontSize: '1.375rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
};

export const theme = createTheme(themeOptions);
