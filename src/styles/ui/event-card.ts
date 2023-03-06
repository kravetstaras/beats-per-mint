export const eventCard = {
  boxSizing: 'border-box',
  maxWidth: '554px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alightItems: 'center',
  padding: '51px 48px 64px 50px',
  bacgroundColor: '#fff',
  borderRadius: '50px',

  '& > .image': {
    position: 'relative',
    maxWidth: '456px',
    maxHeigth: '350px',
  },

  '& > .image > img': {
    borderRadius: '50px',
    maxWidth: '100%',
    objectFit: 'contain',
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
};
