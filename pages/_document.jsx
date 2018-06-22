import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

const polyfillURL =
  'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,' +
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

          {process.env.ENABLE_ANALYTICS === 'true' && (
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          )}

          {process.env.ENABLE_ANALYTICS === 'true' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments)}
                      gtag('js', new Date());
                      gtag('config', '${GA_ID}');`.replace(/\s{2,}/g, ''),
              }}
            />
          )}

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

          {process.env.ENABLE_SENTRY === 'true' && (
            <React.Fragment>
              <script src="https://cdn.ravenjs.com/3.26.2/raven.min.js" crossOrigin="anonymous" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `Raven.config('https://29a59bb1f2f54d5ea36aef5fa9a915fa@sentry.io/1230509', {
                  environment: '${process.env.NODE_ENV}',
                }).install()`.replace(/\s{2,}/g, ''),
                }}
              />
            </React.Fragment>
          )}

          <NextScript />
        </body>
      </html>
    );
  }
}
