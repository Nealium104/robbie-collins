import '@/styles/globals.css'
import { useEffect } from "react"
import { themeChange } from "theme-change"
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

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
      <Component {...pageProps} />
    </>
  )
}
