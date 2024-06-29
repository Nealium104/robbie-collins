import Head from "next/head";
import "@/styles/globals.css";
import { Nova_Flat } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

const flat = Nova_Flat({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.getElementById("top").scrollIntoView();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${flat.style.fontFamily} !important;
        }
      `}</style>
      <Head>
        <title>Robbie Collins</title>
        <meta
          name="description"
          content="Robbie Collins's professional website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
