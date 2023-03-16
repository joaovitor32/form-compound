import type { AppProps } from 'next/app';

import ThemeProvider from 'globals/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
