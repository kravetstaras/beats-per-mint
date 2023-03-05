import React from 'react';
import FooterNavigation from '@/components/layout/footer/footer-navigation';
import Box from '@mui/material/Box';
import RemoveIcon from '@mui/icons-material/Remove';

import ButtonAlto from '@/components/ui/button-alto';

import { josefinSans } from '@/fonts';

export default function Footer() {
	return (
		<Box>
			<FooterNavigation />
			<ButtonAlto
				click={() => console.log('ButtonAlto')}
				label='ButtonAlto'
				icon={<RemoveIcon fontSize='small' />}
			/>

			<p className={josefinSans.className}>
				Beats Per Mint Site last updated November 2022
			</p>
		</Box>
	);
}
