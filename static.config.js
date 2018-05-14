/* eslint-disable import/no-extraneous-dependencies,no-param-reassign */
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
// PostCSS plugins
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';

// noinspection JSUnusedGlobalSymbols
export default {
  siteRoot: 'https://tethys.ai/',
  extractCssChunks: true,
  inlineCss: true,
  // bundleAnalyzer: true,

  getRoutes: () => [
    {
      path: '/',
      component: 'src/components/Home',
    },
    {
      is404: true,
      component: 'src/components/404',
    },
  ],

  webpack: (config, { defaultLoaders, stage }) => {
    let cssLoaders = [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          minimize: true,
          sourceMap: stage === 'dev',
          modules: true,
          camelCase: true,
          localIdentName: stage === 'dev' ? '[name]__[local]--[hash:base64:5]' : '[hash:base64]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            postcssImport(),
            postcssPresetEnv({
              stage: 1,
            }),
            autoprefixer({ flexbox: 'no-2009' }),
            postcssFlexbugsFixes,
          ],
        },
      },
    ];

    if (stage === 'dev') {
      cssLoaders = ['style-loader'].concat(cssLoaders);
    } else {
      cssLoaders = ExtractCssChunks.extract({
        fallback: {
          loader: 'style-loader',
          options: {
            sourceMap: false,
            hmr: false,
          },
        },
        use: cssLoaders,
      });
    }

    const pcssLoader = {
      test: /\.pcss$/,
      use: cssLoaders,
    };

    config.module.rules = [
      {
        oneOf: [pcssLoader, defaultLoaders.jsLoader, defaultLoaders.fileLoader],
      },
    ];

    return config;
  },
};
