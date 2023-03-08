export const header = {
  maxHeight: '134px',
  maxWidth: '1350px',
  margin: '0 auto',
  padding: '26px 0 32px 0',
  backgroundColor: '#fff',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width: 1400px)': {
    padding: '26px 60px 32px 60px',
  },

  '@media (max-width: 768px)': {
    padding: '13px 20px 13px 20px',

    '& > a > img': {
      width: '40px',
      height: '40px',
    },
  },
};

export const headerNavBar = {
  boxSizing: 'border-box',
  display: 'flex',
  gap: '80px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '& > a': {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#4D384E',
    textDecoration: 'none',
    transition: '1s',
    letterSpacing: '1px',
  },

  '& > div > button > svg': {
    width: '48px',
    height: '48px',
  },

  '& > a:hover, & > a:active': {
    fontWeight: '700',
    letterSpacing: '0.14px',
  },

  '@media (max-width: 768px)': {
    gap: '20px',

    '& > a': {
      fontSize: '16px',
      lineHeight: '18px',
    },

    '& > div > button > svg': {
      width: '24px',
      height: '24px',
    },
  },
};
