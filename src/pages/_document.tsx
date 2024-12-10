import { GoogleTagManager } from "@next/third-parties/google";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <GoogleTagManager gtmId="GTM-NLZXNR77" />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Landing pages de alta conversão e sites institucionais para o seu negócio."
          />
          <meta
            name="keywords"
            content="pablosilvadev pablo silva psd landing pages"
          />
          <meta name="author" content="Pablo Silva" />
          <meta name="theme-color" content="#0076E3" />
          <link rel="preload" as="font"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <GoogleTagManager gtmId="GTM-NLZXNR77" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
