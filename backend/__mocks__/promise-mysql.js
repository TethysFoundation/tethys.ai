/* eslint-disable compat/compat */
const mockMysql = jest.genMockFromModule('promise-mysql');

const connection = {
  query: jest.fn(() => Promise.resolve([])),
  end: jest.fn(),
};

mockMysql.createConnection = jest.fn().mockReturnValue(connection);

mockMysql.getMockConnection = () => connection;

mockMysql.clearMocks = () => {
  connection.query.mockClear();
  connection.end.mockClear();
};

module.exports = mockMysql;
