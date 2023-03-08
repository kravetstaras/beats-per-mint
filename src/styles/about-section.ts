export const aboutSection = {
	boxSizing: 'border-box',
	maxWidth: '1350px',
	margin: '0 auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	paddingBottom: '25px',

	'& > h2': {
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '46px',
		color: '#4D384E',
		margin: '0 0 69px 0',
	},

	'& > .cards': {
		margin: '0 auto 40px',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridGap: '74px',
	},

	'@media (max-width: 768px)': {
		'& > h2': {
			fontSize: '20px',
			lineHeight: '22px',
			margin: '0 0 29px 0',
		},

		'& > .cards': {
			gap: '34px',
		},
	},

	'@media (max-width: 576px)': {
		'& > .cards': {
			flexDirection: 'column',
			maxWidth: '280px',
		},
	},
};
