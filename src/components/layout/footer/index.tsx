import React from 'react';
import FooterNavigation from '@/components/layout/footer/footer-navigation';

import { josefinSans } from '@/styles/fonts';

export default function Footer() {
	return (
		<>
			<FooterNavigation />
			<p className={josefinSans.className}>
				Beats Per Mint Site last updated Noveber 2022
			</p>
		</>
	);
}
