/* eslint-disable global-require */

describe('env', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  it('exports BASE_URL in production', () => {
    process.env.NODE_ENV = 'production';
    const env = require('../src/env').default;
    expect(env.BASE_URL).toEqual('https://7jwcjesxi6.execute-api.us-east-1.amazonaws.com/latest');
  });

  it('exports BASE_URL in development', () => {
    process.env.NODE_ENV = 'development';
    const env = require('../src/env').default;
    expect(env.BASE_URL).toEqual('http://localhost:3001');
  });

  it('exports process.env', () => {
    const env = require('../src/env').default;
    expect(env).toMatchObject(process.env);
  });
});
