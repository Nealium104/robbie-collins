import '@/styles/globals.css'
import { useEffect } from "react"
import { themeChange } from "theme-change"

export default function App({ Component, pageProps }) {
  const themeValues = [
    "business",
    "light",
  ]

  useEffect(()=> {
    themeChange(false)
  })
  return <Component {...pageProps} />
}
