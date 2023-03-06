import { relative } from 'path';

export const authSection = {
  maxWidth: '1329px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'raw',
  alightItems: 'center',
  flexWrap: 'nowrap',
};

export const authForm = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '72px  0 37px 121px',
  textAligth: 'center',
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

  '& > .strong': {
    fontWeight: '700',
    margin: '0 0 33px 0',
  },

  '& > .strong > .underline': {
    fontWeight: '400',
    color: '#1A9DC7',
    borderBottom: '1px solid #1A9DC7',
    cursor: 'pointer',
  },

  '& > form > button': {
    margin: '40px 0 21px 100px',
  },

  '& > form > p': {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#565656',
  },
};

export const pistachioPart = {
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
};

export const inputControl = {
  margin: '15px 0 15px 0',
  display: 'flex',
  flexDirection: 'column',

  '& > div > input': {
    boxSizing: 'border-box',
    width: '416px',
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
};
