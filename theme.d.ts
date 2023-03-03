import { ThemeOptions } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
	interface ThemeOptions {
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
		};
	}
}
