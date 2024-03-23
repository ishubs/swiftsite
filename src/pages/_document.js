import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
        </Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J62V9J0HQ2"
        />

        <Script id="google-analytics">
          {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'G-J62V9J0HQ2');
          `}
        </Script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
