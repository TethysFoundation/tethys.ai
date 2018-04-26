/* eslint-disable compat/compat */
const mockMysql = jest.genMockFromModule('promise-mysql');

const connection = {
  query: jest.fn(() => Promise.resolve([])),
  end: jest.fn(),
};

mockMysql.createConnection = jest.fn().mockReturnValue(connection);

module.exports = mockMysql;
