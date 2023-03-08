export const discoverSection = {
	boxSizing: 'border-box',
	padding: '66px 0 0 0',
	maxWidth: '1368px',
	margin: '0 auto',
	backgroundColor: 'inherit',

	'& > h2': {
		fontWeight: '700',
		fontSize: '40px',
		textAlign: 'center',
		lineHeight: '46px',
		color: '#4D384E',
		margin: '0 0 42px 0',
	},

	'& > .grid': {
		maxWidth: 'fit-content',
		margin: '0 auto',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '50px',
	},

	'@media (max-width: 1300px)': {
		'& > .grid': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'centers',
			justifyContent: 'center',
		},
	},

	'@media (max-width: 768px)': {
		'& > h2': {
			fontSize: '20px',
			lineHeight: '22px',
			margin: '0 0 29px 0',
		},
	},
};
