import { ThemeOptions } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    bpmPalette: {
      sulu: React.CSSProperties['color'];
      pistachio: React.CSSProperties['color'];
      mortar: React.CSSProperties['color'];
      clayCreek: React.CSSProperties['color'];
      cornField: React.CSSProperties['color'];
      altoD9: React.CSSProperties['color'];
      altoD3: React.CSSProperties['color'];
      scorpion: React.CSSProperties['color'];
      martinique: React.CSSProperties['color'];
      mallard: React.CSSProperties['color'];
      aquamarine: React.CSSProperties['color'];
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    btnMortar: true;
    btnAlto: true;
    btnSulu: true;
    btnMallard: true;
  }
}
