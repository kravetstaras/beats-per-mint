export const communityCreationsSection = {
	maxWidth: '1350px',
	margin: '0 auto',
	position: 'relative',
	zIndex: '3',

	'&::before': {
		content: '""',
		position: 'absolute',
		zIndex: '-1',
		height: '558px',
		width: 'calc(100vw + 131px)',
		top: '-330px',
		left: '-130px',
		backgroundColor: '#CAED6B',
		borderRadius: '300px 0 0 300px',
	},

	'& > h2': {
		margin: '0',
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '46px',
		color: '#4D384E',
	},

	'& > p': {
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
	},

	'& > .grid': {
		padding: '0 0 0 49px',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridGap: '83px',
	},

	'@media (max-width: 1300px)': {
		'& > .grid': {
			padding: '0',
			gridGap: '40px',
		},
	},

	'@media (max-width: 1100px)': {
		'& > .grid': {
			padding: '0',
			gridGap: '10px',
		},
	},

	'@media (max-width: 1024px)': {
		'& > .grid': {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			gap: '20px',
		},
	},

	'@media (max-width: 768px)': {
		'& > h2': {
			fontSize: '20px',
			lineHeight: '22px',
		},

		'& > p': {
			fontSize: '16px',
			lineHeight: '18px',
		},
	},
};
