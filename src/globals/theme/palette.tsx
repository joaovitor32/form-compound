const GREY = {
  100: '#FFFFFF',
  300: '#6F6F6F',
  400: '#F2F2F2',
};

const PRIMARY = {
  lighter: '#3482FF',
  light: '#33DBEC',
  light1: ' #30DBF2',
  light2: '#5170FF',
  main: '#2A3D5A',
};

const SUCCESS = {
  main: '#26C142',
  light: '#2FD74D',
};

const SECONDARY = {
  main: '#91D329',
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#DA291C',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const WARNING = {
  lighter: '#FF0000',
  light: '#FF0000',
  main: '#FF0000',
  dark: '#FF0000',
  darker: '#FF0000',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
};

const palette = {
  ...COMMON,
};

export default palette;
