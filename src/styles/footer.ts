export const footer = {
  maxHeight: '240px',
  maxWidth: '1350px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '16px',
  lineHeight: '19px',
  textAlign: 'center',
  color: '#FFFFFF',
  padding: '58px 0 36px 0',
  backgroundColor: '#4D384E',
  borderRadius: '100px 100px 0px 0px',
  textTransform: 'none',
  position: 'relative',
  zIndex: '2',
  overflow: 'hidden',

  '& > div': {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
  },

  '& > p': {
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
  },
};

export const grayBlock = {
  position: 'absolute',
  width: '100vw',
  maxHeight: '240px',
  backgroundColor: '#FAFAFB',
  zIndex: '1',
};
