import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href="/global.css" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          src="/_shared/plaques.js"
          data-sm-plaque-slug="sick-fits"
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
