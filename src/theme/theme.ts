import { createTheme, CSSObject } from '@mui/material';

import {
  btnMortar,
  btnAlto,
  btnSulu,
  btnMallard,
} from '@/theme/components/button';

const theme = createTheme({
  palette: {
    bpmPalette: {
      sulu: '#CAED6B',
      pistachio: '#92C800',
      mortar: '#4D384E',
      clayCreek: '#7F805A',
      cornField: '#EAF8C4',
      altoD9: '#D9D9D9',
      altoD3: '#D3D3D3',
      scorpion: '#565656',
      martinique: '#342B52',
      mallard: '#172B16',
      aquamarine: '#85FFB6',
      curiousBlue: '#1A9DC7',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'btnMortar' },
          style: btnMortar as CSSObject,
        },
        {
          props: { variant: 'btnAlto' },
          style: btnAlto as CSSObject,
        },
        {
          props: {
            variant: 'btnSulu',
          },
          style: btnSulu as CSSObject,
        },
        {
          props: { variant: 'btnMallard' },
          style: btnMallard as CSSObject,
        },
      ],
    },
    // MuiTextField: {
    //   variants: [
    //     {
    //       props: { variant: 'btnMortar' },
    //       style: btnMortar as CSSObject,
    //     },
    //     {
    //       props: { variant: 'btnMortar' },
    //       style: btnMortar as CSSObject,
    //     },
    //   ],
    // },
  },
});

export default theme;
