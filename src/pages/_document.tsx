import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Landing pages de alta conversão e sites institucionais para o seu negócio."
          />
          <meta
            name="keywords"
            content="pablosilvadev pablo silva psd landing pages"
          />
          <meta name="author" content="Pablo Silva Dev | Desenvolvedor full-stack" />
          <meta name="theme-color" content="#0076E3" />
          <link rel="preload" as="font"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>

        </Head>
        {/* Loading Google Tag Manager script script */}
        <Script
          id="load-google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLZXNR77');
          `,
          }}
        />
        {/* Asynchronously load the Google Analytics gtag.js script */}
        <Script
          id="load-google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-R1X93YMK83"
          strategy="afterInteractive"
          async
        />
        {/* Initialize Google Analytics */}
        <Script
          id="execute-google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R1X93YMK83');
          `,
          }}
        />
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NLZXNR77"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
