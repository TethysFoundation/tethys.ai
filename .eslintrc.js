module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react',
  ],
  plugins: ['compat'],
  rules: {
    'max-len': ['error', { code: 120, comments: 120 }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'compat/compat': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/__mocks__/*', '**/*.test.js*'] }],
    'no-use-before-define': ['error', { functions: false }],
  },
};
