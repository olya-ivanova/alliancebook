import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Orbitron, Roboto } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${orbitron.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}