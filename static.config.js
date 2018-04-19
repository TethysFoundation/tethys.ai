/* eslint-disable import/no-extraneous-dependencies,no-param-reassign */
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';

// noinspection JSUnusedGlobalSymbols
export default {
  siteRoot: 'https://lambdanetwork-7b7b3.firebaseapp.com',
  stagingSiteRoot: 'http://localhost:3000',
  preact: true,
  extractCssChunks: true,
  inlineCss: true,

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
    const cssLoaders = [
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
            postcssFlexbugsFixes,
            autoprefixer({ flexbox: 'no-2009' }),
          ],
        },
      },
    ];

    if (stage === 'dev') {
      config.module.rules = [
        {
          oneOf: [
            {
              test: /\.pcss$/,
              use: ['style-loader'].concat(cssLoaders),
            },
            defaultLoaders.jsLoader,
            defaultLoaders.fileLoader,
          ],
        },
      ];
    } else {
      config.module.rules = [
        {
          oneOf: [
            {
              test: /\.pcss$/,
              use: ExtractCssChunks.extract({
                fallback: {
                  loader: 'style-loader',
                  options: {
                    sourceMap: false,
                    hmr: false,
                  },
                },
                use: cssLoaders,
              }),
            },
            defaultLoaders.jsLoader,
            defaultLoaders.fileLoader,
          ],
        },
      ];
    }

    return config;
  },
};
