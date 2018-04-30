import mysqlMock from 'promise-mysql';
import config from '../../src/dbconfig';
import { createSubscriber } from '../../src/apis/subscribers';

jest.mock('../../src/dbconfig');

describe('createSubscriber', () => {
  const request = { body: { email: 'test@example.com', country: 'ca' } };

  afterEach(() => {
    mysqlMock.clearMocks();
  });

  it('connects to the database', async () => {
    await createSubscriber(request);

    expect(mysqlMock.createConnection).toHaveBeenCalledWith(config);
  });

  it('saves a new subscriber to the database, upper-casing the country code', async () => {
    const response = await createSubscriber(request);

    const insertQuery = 'INSERT IGNORE INTO subscribers (email, country) VALUES (?, ?)';
    expect(mysqlMock.getMockConnection().query).toHaveBeenCalledWith(insertQuery, ['test@example.com', 'CA']);

    expect(mysqlMock.getMockConnection().end).toHaveBeenCalled();

    expect(response).toEqual({});
  });
});
