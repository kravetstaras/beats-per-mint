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
};
