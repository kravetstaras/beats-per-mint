export const authSection = {
  maxWidth: '1350px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',

  '@media (max-width: 889px)': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const authForm = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '150px  0 37px 121px',
  width: '50%',
  position: 'relative',

  '& > h3': {
    margin: '0 auto 33px',
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '46px',
    textAlign: 'center',
    color: '#000000',
  },

  '& > p': {
    margin: '0 auto',
    color: '#565656',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '32px',
    textAlign: 'center',
  },

  '& > form': {
    width: '100%',
    padding: '0 40px 0 40px',
    display: 'flex',
    flexDirection: 'column',
  },

  '& > form > button': {
    margin: '40px auto 20px',
  },

  '& > form > p': {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#565656',
  },

  '& > form > .strong': {
    textAlign: 'center',
    fontWeight: '700',
    margin: '0 0 33px 0',
    cursor: 'pointer',
  },

  '& > form > .strong > .underline': {
    fontWeight: '400',
    color: '#1A9DC7',
    borderBottom: '1px solid #1A9DC7',
    cursor: 'pointer',
  },

  '@media (max-width: 1024px)': {
    padding: '20px',
  },

  '@media (max-width: 889px)': {
    width: '100%',
    padding: '80px 20px 0 20px',
  },

  '@media (max-width: 768px)': {
    '& > h3': {
      margin: '0 auto 15px',
      fontSize: '20px',
      lineHeight: '24px',
    },

    '& > p': {
      fontSize: '18px',
      lineHeight: '20px',
      margin: '0 0 10px 0',
    },

    '& > form > p': {
      fontSize: '18px',
      lineHeight: '20px',
    },
  },

  '@media (max-width: 430px)': {
    padding: '120px 0 0 0',
  },
};

export const pistachioPart = {
  boxSizing: 'border-box',
  display: 'flex',
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#FFFFFF',
  padding: '246px 90px 336px 90px',
  backgroundColor: '#92C800',
  borderRadius: '50px',

  '& > h1': {
    margin: '0',
    fontWeight: '700',
    fontSize: '64px',
    lineHeight: '90px',
  },

  '& > h1 > span': {
    color: '#CAED6B',
    width: '430px',
  },

  '@media (max-width: 1024px)': {
    padding: '20px',

    '& > h1': {
      margin: '0',
      fontWeight: '700',
      fontSize: '30px',
      lineHeight: '36px',
    },
  },

  '@media (max-width: 889px)': {
    width: 'calc(100% + 111px)',
    margin: '0 auto',
    borderRadius: '0',
    position: 'absolute',
    top: '-40px',
    left: '-61px',
  },

  '@media (max-width: 768px)': {
    width: 'calc(100% + 50px)',
    top: '-20px',
    left: '-25px',
  },
};

export const inputControl = {
  margin: '15px 0 15px 0',
  display: 'flex',
  flexDirection: 'column',

  '& > div > input': {
    boxSizing: 'border-box',
    width: '100%',
    height: '71px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'rgba(217, 217, 217, 0.46)',
    padding: '5px 0 10px 15px',
    fontSize: '20px',
    lineHeight: '30px',
  },

  '& > div::after, & > div::before': {
    display: 'none',
  },

  '& > label': {
    outline: 'none',
    border: 'none',
    color: '#000000',
    top: '-30px',
    left: '-25px',
    fontSize: '20px',
    lineHeight: '30px',
  },

  '& > label > span': {
    color: '#E75656',
  },

  '@media (max-width: 768px)': {
    margin: '5px 0 5px 0',

    '& > div > input': {
      height: '51px',
      fontSize: '16px',
      lineHeight: '18px',
    },

    '& > label': {
      outline: 'none',
      border: 'none',
      color: '#000000',
      top: '-30px',
      left: '-25px',
      fontSize: '16px',
      lineHeight: '18px',
    },
  },
};
