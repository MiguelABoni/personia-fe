import { SimplePaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    blueLight: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    black: SimplePaletteColorOptions;
    gray: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    blueLight: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blueLight: true;
    white: true;
    black: true;
    gray: true;
  }
}
