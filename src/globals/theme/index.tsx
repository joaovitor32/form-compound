import { ReactNode } from 'react';

import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import palette from './palette';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const themeOptions: ThemeOptions = {
    palette,
  };

  const theme = createTheme(themeOptions);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
