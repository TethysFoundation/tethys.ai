module.exports = {
  projects: [
    {
      setupFiles: ['jest-canvas-mock'],
      displayName: 'frontend',
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.css$': 'identity-obj-proxy',
      },
      testPathIgnorePatterns: ['./backend']
    },
    './backend',
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: [
        '<rootDir>/pages/**/*.js?(x)',
        '<rootDir>/src/**/*.js?(x)',
        '<rootDir>/backend/**/*.js?(x)',
        '<rootDir>/__tests__/**/*.js?(x)',
        '<rootDir>/__mocks__/**/*.js?(x)',
      ],
      testPathIgnorePatterns: ['/node_modules/', '__snapshots__', 'build', 'migrations'],
    },
  ],
};
