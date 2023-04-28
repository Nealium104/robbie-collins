import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self' data:; script-src 'self' https://www.google.com/recaptcha/api/siteverify https://www.gstatic.com/recaptcha/ https://vitals.vercel-insights.com/; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.google.com/recaptcha/; img-src 'self' data:;"
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
