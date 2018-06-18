module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: { flexbox: 'no-2009' },
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-properties': {
          preserve: false,
          variables: {
            backgroundColor: '#29292F',
            backgroundDarkColor: 'rgba(0, 0, 0, 0.16)',
            mainTextColor: '#B0B0B0',
            headingTextColor: '#FFF',
            inputBackgroundColor: 'rgba(255, 255, 255, 0.2)',
            inputTextColor: 'rgba(255, 255, 255, 1)',
            inputPlaceholderColor: 'rgba(255, 255, 255, 0.2)',
            tethysBlue: '#30f1fd',
            tethysBlueBorder: 'rgba(48, 241, 253, 0.3)',
            tethysGreen: '#06f9c2',
            tethysGreenBorder: 'rgba(6, 249, 194, 0.3)',
          },
        },
      },
    },
  },
};
