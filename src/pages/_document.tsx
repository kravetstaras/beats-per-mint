import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>BPM</title>
      </Head>
      <body style={{ boxSizing: 'border-box', overflowX: 'hidden' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
