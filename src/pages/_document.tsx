import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          width: '100vw',
          height: '100vh',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',

          backgroundColor: '#FFFFFF',

          padding: 0,
          margin: 0,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
