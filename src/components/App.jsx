import React from 'react';
import { Head, Router } from 'react-static';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Routes from 'react-static-routes';
import '../i18n'; // need to import this to initialize i18next
import '../assets/stylesheets/app.pcss';

const polyfillURL = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,' +
  'Array.prototype.findIndex,Array.prototype.includes';

const GA_ID = 'UA-50367475-9';

const App = () => (
  <React.Fragment>
    <Head>
      <title>Tethys</title>

      <meta
        name="description"
        content="A decentralized network based on blockchain technology powering NextGen Semantic Web"
      />

      {
        process.env.NODE_ENV === 'production' &&
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      }

      {
        process.env.NODE_ENV === 'production' &&
        <script>
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');`.replace(/\s{2,}/g, '')
          }
        </script>
      }

      <script src={polyfillURL} />

      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />

      <link
        href="https://fonts.googleapis.com/css?family=Barlow+Condensed:500|Montserrat:400,500"
        rel="stylesheet"
      />

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>

    <Router>
      <Routes />
    </Router>
  </React.Fragment>
);

function withHotness(component) {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const { hot } = require('react-hot-loader');
  return hot(module)(component);
}

export default process.env.NODE_ENV === 'development' ? withHotness(App) : App;
