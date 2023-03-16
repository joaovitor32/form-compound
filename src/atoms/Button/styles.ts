/* eslint-disable no-restricted-syntax */

interface ButtonProps {
  color1: string;
  color2: string;
  outlined?: boolean;
}

const styles = {
  button: ({ color1, color2, outlined }: ButtonProps) => ({
    backgroundColor: outlined ? 'transparent' : 'secondary.main',
    borderRadius: '36px',

    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '9px',

    boxShadow: outlined ? null : '0px 4px 4px rgba(0, 0, 0, 0.25)',

    width: 'auto',
    height: 'auto',
    minHeight: '55px',

    color: outlined ? 'secondary.main' : 'grey.100',

    border: '1px solid',
    borderColor: 'secondary.main',

    ':hover': {
      color: 'grey.100',
      border: '1px solid transparent',
      background: `linear-gradient(270deg,${color1},${color2})`,
    },
  }),
};

export default styles;
