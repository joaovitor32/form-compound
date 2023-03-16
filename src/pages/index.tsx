import Head from 'next/head';

import * as Templates from 'templates';

export default function Home() {
  return (
    <>
      <Head>
        <title>Form compound</title>
        <meta name="description" content="Compound component attempt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Templates.Banner />
    </>
  );
}
