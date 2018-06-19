const withPlugins = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
const bundleAnalyzer = require('@zeit/next-bundle-analyzer');

const nextConfig = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = withPlugins(
  [
    [
      css,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          camelCase: true,
          localIdentName: '[name]__[local]--[hash:base64:5]',
        },
        [PHASE_PRODUCTION_BUILD]: {
          cssLoaderOptions: {
            importLoaders: 1,
            camelCase: true,
            localIdentName: '[hash:base64:8]',
          },
        },
      },
    ],
    [optimizedImages, {}],
    [
      bundleAnalyzer,
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../../bundles/server.html',
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html',
          },
        },
      },
    ],
  ],
  nextConfig
);
