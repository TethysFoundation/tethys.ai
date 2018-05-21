import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

const polyfillURL = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,' +
  'Array.prototype.findIndex,Array.prototype.includes';

const GA_ID = 'UA-50367475-9';

// noinspection JSUnusedGlobalSymbols
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Tethys</title>

          <meta
            name="description"
            content="A decentralized network based on blockchain technology powering NextGen Semantic Web"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {
            process.env.NODE_ENV === 'production' &&
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          }

          {
            process.env.NODE_ENV === 'production' &&
            <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments)}
                      gtag('js', new Date());
                      gtag('config', '${GA_ID}');`.replace(/\s{2,}/g, ''),
            }}
            />
          }

          <script src={polyfillURL} />

          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />

          <link
            href="https://fonts.googleapis.com/css?family=Barlow+Condensed:500|Montserrat:400,500"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="/_next/static/style.css" />

          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
