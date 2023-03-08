export const communityCreationCard = {
  maxWidth: '307px',

  '& > .image': {
    width: '307px',
    height: '307px',
    borderRadius: '30px',
    overflow: 'hidden',
    position: 'relative',
  },

  '& > .image > .mask': {
    width: '307px',
    height: '307px',
    borderRadius: '30px',
    overflow: 'hidden',
    backgroundColor: '#BB874A',
    opacity: '0.4',
    position: 'absolute',
    zIndex: '1',
  },

  '& > .image > img': {
    objectFit: 'cover',
  },

  '& > .image > button': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10',
  },

  '& > .content': {
    maxWidth: '307px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '& > .content > div > h3': {
    margin: '19px 0 0 0',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#565656',
  },

  '& > .content > div > h4': {
    margin: '0',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '18px',
    color: '#565656',
  },

  '& > .content > .marks': {
    display: 'flex',
    margin: '19px 0 0 0',
    gap: '10px',
    fontSize: '16px',
    lineHeight: '18px',
    color: '#565656',
  },

  '& > .content > .marks > span': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  '& > .content > .marks > span > svg': {
    fill: '#4D384E',
  },
};
