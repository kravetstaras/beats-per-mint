export const btnMortar = {
	fontWeight: '700',
	fontSize: '20px',
	lineHeight: '24px',
	textAlign: 'center',
	color: '#FFFFFF',
	padding: '25px 53px 18px 53px',
	backgroundColor: '#4D384E',
	borderRadius: '30px',
	transition: '0.2s',

	hover: {
		background: '#CAED6B',
		color: '#fff',
		boxShadow: '0 0 5px, 0 0 25px #CAED6B, 0 0 50px #CAED6B, 0 0 100px #CAED6B',
	},

	'&:active': {
		opacity: '.5',
	},
};

export const btnAlto = {
	fontWeight: '700',
	fontSize: '16px',
	lineHeight: '18px',
	textAlign: 'center',
	color: '#000000',
	padding: '6px 19px 9px 17px',
	display: 'flex',
	gap: '4px',
	alightItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#D9D9D9',
	borderRadius: '30px',
	transition: '0.2s',

	'&:hover': {
		background: '#4D384E',
		color: '#D9D9D9',
		boxShadow: '0 0 5px, 0 0 25px #4D384E, 0 0 50px #4D384E, 0 0 100px #4D384E',
	},

	'&:active': {
		opacity: '.5',
	},
};
