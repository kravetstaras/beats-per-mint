export const btnMortar = {
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#FFFFFF',
  padding: '25px 53px 18px 53px',
  backgroundColor: '#4D384E',
  borderRadius: '30px',
  transition: '1s',
  textTransform: 'none',

  '&:hover': {
    background: '#CAED6B',
    color: '#fff',
    boxShadow: '0 0 5px, 0 0 10px #CAED6B, 0 0 20px #CAED6B, 0 0 30px #CAED6B',
  },

  '&:active': {
    opacity: '.5',
  },

  '&:disabled': {
    backgroundColor: '#7F805A',
    color: '#EAF8C4',
  },
};

export const btnAlto = {
  fontSize: '16px',
  lineHeight: '18px',
  textAlign: 'center',
  color: '#000000',
  padding: '6px 19px 9px 17px',
  display: 'flex',
  gap: '4px',
  alightItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#D9D9D9',
  borderRadius: '30px',
  transition: '1s',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: '#EAF8C4',
    color: '#4D384E',
    boxShadow: '0 0 5px, 0 0 10px #EAF8C4, 0 0 20px #EAF8C4, 0 0 30px #EAF8C4',
  },

  '&:active': {
    opacity: '.5',
  },
};
