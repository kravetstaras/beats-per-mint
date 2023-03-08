export const eventCard = {
	boxSizing: 'border-box',
	maxWidth: '554px',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alightItems: 'center',
	padding: '51px 48px 64px 50px',
	backgroundColor: '#fff',
	borderRadius: '50px',
	position: 'relative',

	'& > .image': {
		position: 'relative',
		maxWidth: '456px',
		maxHeigth: '350px',
		marginBottom: '27px',
	},

	'& > .image > img': {
		borderRadius: '50px',
	},

	'& > .image > button': {
		width: '84px',
		height: '84px',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	},

	'& > .image > button > span': {
		display: 'flex',
	},

	'& > .image > button:hover': {
		color: '#fff',
	},

	'& > .content': {
		margin: '0',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
	},

	'& > .content > h4': {
		margin: '0',
		color: '#342B52',
	},

	'& > .content > h5': {
		margin: '0',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#565656',
	},

	'& > .content > ul': {
		margin: '21px 0 33px 0',
		padding: '0 0 0 20px',
	},

	'& > .content > ul > li': {
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
	},

	'& > .content >  .controls-block': {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	'& > .content >  .controls-block > a': {
		display: 'flex',
		justifyContent: 'space-between',
		gap: '5px',
		alignItems: 'center',
		color: '#4D384E',
	},

	'& > .content > .controls-block > a:hover': {
		color: '#1A9DC7',
	},

	'@media (max-width: 640px)': {
		maxWidth: '280px',
		padding: '22px 16px 22px 22px',

		'& > .image': {
			display: 'none',
		},

		'& > .content': {
			fontSize: '16px',
			lineHeight: '18px',
		},

		'& > .content > ul': {
			margin: '21px 0 5px 0',
		},

		'& > .content > ul > li': {
			fontSize: '14px',
			lineHeight: '16px',
		},

		'& > .content >  .controls-block': {
			flexDirection: 'column',
			gap: '5px',
			alignItems: 'center',
		},
	},
};
