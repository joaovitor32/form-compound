import React, { ButtonHTMLAttributes } from 'react';

import { Button as MUIButton, SxProps, useTheme } from '@mui/material';

import styles from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  sx?: SxProps;
  outlined?: boolean;
}

export const Button = ({ onClick, sx, title, outlined = false, ...rest }: ButtonProps) => {
  const theme = useTheme();

  return (
    <MUIButton
      sx={{
        ...styles.button({ outlined, color2: theme.palette.secondary.main, color1: theme.palette.primary.light }),
        ...sx,
      }}
      {...rest}
    >
      {title}
    </MUIButton>
  );
};
