const mockMysql = jest.genMockFromModule('promise-mysql');

const connection = {
  query: jest.fn(() => ({
    then: (callback) => callback([]),
  })),
  end: jest.fn(),
};

mockMysql.createConnection = jest.fn().mockReturnValue(connection);

module.exports = mockMysql;
