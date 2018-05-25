module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
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
          },
        },
      },
    },
    'autoprefixer': { flexbox: 'no-2009' },
    'postcss-flexbugs-fixes': {},
  },
};
