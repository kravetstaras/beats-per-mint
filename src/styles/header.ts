export const header = {
  maxHeight: '134px',
  padding: '26px 60px 32px 60px',
  backgroundColor: '#fff',
  width: '100%',
  display: 'flex',
  alightItems: 'center',
  justifyContent: 'space-between',
};

export const headerNavBar = {
  boxSizing: 'border-box',
  display: 'flex',
  gap: '80px',
  alignItems: 'center',
  justifyContent: 'center',
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

  '& > a:hover, & > a:active': {
    fontWeight: '700',
    letterSpacing: '0.14px',
  },
};
