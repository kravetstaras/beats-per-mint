export const aboutSectionCard = {
	boxSizing: 'border-box',
	textAlign: 'center',
	fontWeight: '400',
	fontSize: '20px',
	lineHeight: '32px',
	color: '#000000',
	width: 'fit-content',

	'& > h3': {
		margin: '21px 0 12px 0',
		fontWeight: '700',
		fontSize: '24px',
		textAlign: 'center',
	},

	'@media (max-width: 768px)': {
		fontSize: '14px',
		lineHeight: '16px',

		'& > h3': {
			margin: '11px 0 6px 0',
			fontSize: '18px',
		},
	},

	'@media (max-width: 640px)': {
		'& > h2': {
			fontSize: '20px',
			lineHeight: '22px',
			margin: '0 0 29px 0',
		},
	},
};
