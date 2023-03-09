export const showMoreWrapper = {
  padding: '0 0 20px 0',
  position: 'relative',
  width: 'fit-content',
  margin: '0 auto',

  '& > .shadow': {
    position: 'absolute',
    width: '100%',
    height: '550px',
    top: '0',
    background:
      'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0) 800px)',
  },

  '& > button': {
    maxWidth: '150px',
    position: 'absolute',
    top: '103%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
