import { CSSProperties } from 'react';
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
  interface TypographyVariants {
    superTitle: CSSProperties;
    superText: CSSProperties;
  }
  interface TypographyVariantsOptions {
    superTitle: CSSProperties;
    superText: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    superTitle: true;
    superText: true;
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
