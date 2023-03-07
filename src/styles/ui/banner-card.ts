export const bannerCard = {
  boxSizing: 'border-box',
  position: 'relative',
  maxWidth: '393px',
  overflow: 'hidden',

  '& > img': {
    borderRadius: '50px',
  },

  '& > .content': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
  },
};

export const bannerMask = {
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',
  background: '#BB874A',
  borderRadius: '50px',
  opacity: '.2',
};
