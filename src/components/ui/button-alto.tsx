import React from 'react';
import { Button } from '@mui/material';

import { helvetica } from '@/fonts';

type TButtonAlto = {
	icon: JSX.Element;
	label: string;
	click: () => void;
};

export default function ButtonAlto({ icon, label, click }: TButtonAlto) {
	return (
		<Button variant='btnAlto' onClick={click}>
			<span>{icon}</span>
			<span className={helvetica.className}>{label}</span>
		</Button>
	);
}
