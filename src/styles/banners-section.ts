export const bannersSection = {
	boxSizing: 'border-box',
	maxWidth: '1350px',
	margin: '0 auto',
	display: 'grid',
	gridTemplateColumns: '1fr 393px',
	gridColumnGap: '32px',
	paddingBottom: '80px',

	'& > .mainBanner': {
		backgroundColor: '#92C800',
		borderRadius: '50px',
		padding: '96px 0 113px 88px',
	},

	'& > .mainBanner > p': {
		margin: 0,
		fontWeight: '400',
		fontSize: '30px',
		lineHeight: '100%',
		color: '#000000',
	},

	'& > .mainBanner > p > span': {
		color: '#fff',
	},

	'& > .mainBanner > h1': {
		margin: '30px 0 67px 0',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '75px',
		lineHeight: '70px',
		maxWidth: '539px',
		color: '#000000',
	},

	'& > .banners': {
		display: 'flex',
		flexDirection: 'column',
		gap: '32px',
	},

	'@media (max-width: 1130px)': {
		gridTemplateColumns: '1fr',
		gridTemplateRows: '1fr 0,5fr',
		gridRowGap: '32px',

		'& > .banners': {
			flexDirection: 'row',
			gap: '32px',
			justifyContent: 'space-between',
			height: 'fit-contents',
			alignItems: 'flex-start',
		},
	},

	'@media (max-width: 950px)': {
		maxWidth: 'fit-content',
		display: 'flex',

		'& > .mainBanner': {
			maxWidth: '280px',
			padding: '23px 23px 23px 20px',
		},

		'& > .mainBanner > h1': {
			margin: '10px 0 25px 0',
			fontSize: '33px',
			lineHeight: '36px',
		},

		'& > .mainBanner > p': {
			fontSize: '18px',
		},

		'& > .banners > div:last-child': {
			display: 'none',
		},
	},

	'@media (max-width: 640px)': {
		flexDirection: 'column',
	},
};
