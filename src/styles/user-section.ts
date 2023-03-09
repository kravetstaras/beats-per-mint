export const userSection = {
	position: 'relative',
	zIndex: '3',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',

	'& > svg': {
		fill: '#121212',
		width: '129px',
		height: '129px',
		margin: '0 auto 17px',
	},

	'& > span': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '5px',
	},

	'& > span > svg': {
		border: '1px solid #000',
		borderRadius: '50%',
		padding: '2px 2px 2px 0',
	},

	'& > span > h3': {
		fontWeight: '700',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#4D384E',
		margin: 0,
	},

	'& > p': {
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
	},

	'& > .statistic': {
		display: 'flex',
		justifyContent: 'center',
		gap: '36px',
		fontSize: '16px',
		lineHeight: '18px',
		textAlign: 'center',
		color: '#000000',
	},

	'& > .statistic > .subscriptions, & > .statistic > .content-created': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
};
