import '@/styles/globals.css'
import { useEffect } from "react"
import { themeChange } from "theme-change"
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '100'] })

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
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
</Head>
      <Component {...pageProps} />
    </>
  )
}
