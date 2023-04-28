import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const csp = `
      default-src 'self';
      script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ 'unsafe-inline';
      frame-src 'self' https://www.google.com/recaptcha/;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data:;
    `;
    return { ...initialProps, csp };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={this.props.csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;