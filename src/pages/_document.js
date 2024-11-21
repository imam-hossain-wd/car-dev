/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
      <meta name="google-site-verification" content="BsO6PRJgg4HaeNY2nrVIOo5gNAbIu9_dlXNlO-XHY_U" />
      {/* Google Analytics code */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MGRFG2J5V1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-MGRFG2J5V1');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
