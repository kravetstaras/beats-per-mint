export const bannerCard = {
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '393px',
  height: '322px',
  borderRadius: '50px',

  '& > img': {
    objectFit: 'cover',
  },

  '& > .content': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    padding: '53px 20px 32px 44px',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '40px',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  '& > .content > div > p': {
    margin: '0',
  },

  '& > .content > div > h4': {
    margin: '0',
    fontWeight: '700',
    fontSize: '35px',
    lineHeight: '35px',
  },

  '& > .content > a': {
    margin: '0',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#000',
  },
};

export const bannerMask = {
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',
  background: '#BB874A',
  borderRadius: '50px',
  opacity: '.6',
};
