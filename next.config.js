const withPlugins = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = withPlugins([
  [css, {
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
  }],
  [optimizedImages, {}],
], nextConfig);
