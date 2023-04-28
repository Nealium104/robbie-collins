import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.google.com/recaptcha/;"
      />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
