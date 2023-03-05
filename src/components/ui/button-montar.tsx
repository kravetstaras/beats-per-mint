import React from 'react';
import { Button } from '@mui/material';

import { inter } from '@/fonts';

type TButtonMontar = {
	label: string;
	click: () => void;
};

export default function ButtonMontar({ label, click }: TButtonMontar) {
	return (
		<Button variant='btnMortar' onClick={click}>
			<span className={inter.className}>{label}</span>
		</Button>
	);
}
