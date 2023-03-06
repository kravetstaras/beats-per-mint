export const eventCard = {
  boxSizing: 'border-box',
  maxWidth: '554px',
  display: 'flex',
  flexDirection: 'column',
  alightItems: 'center',
  padding: '51px 48px 64px 50px',

  '& > img': {
    maxWidth: '456px',
    maxHeigth: '350px',
    objectFit: 'contain',
    position: 'relative',
  },

  '& > img > button': {
    width: '84px',
    height: '84px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
