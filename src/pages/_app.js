import Head from 'next/head'
import '@/styles/globals.css'
import { useEffect } from "react"
import { themeChange } from "theme-change"
import { Nova_Flat } from 'next/font/google'
// import localFont from '@next/font/local'

// const poltawski = localFont({ src: '../../public/font/PoltawskiNowy-VariableFont_wght.ttf'})

const flat = Nova_Flat({ subsets: ['latin'], weight: ['400'] })



export default function App({ Component, pageProps }) {
  const themeValues = [
    "business",
    "light",
  ]

  useEffect(()=> {
    themeChange(false)
  })
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${flat.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Robbie Collins</title>
        <meta name="description" content="Robbie Collins's professional website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
