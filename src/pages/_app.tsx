import type { AppProps } from 'next/app';
import Head from 'next/head';
import { roboto, orbitron } from '@/fonts/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>AllianceBook</title>
      </Head>
      <main className={cn(roboto.className, orbitron.className)}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
