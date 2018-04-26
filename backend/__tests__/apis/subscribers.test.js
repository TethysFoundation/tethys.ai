import mysql from 'promise-mysql';
import config from '../../src/dbconfig';
import { createSubscriber } from '../../src/apis/subscribers';

jest.mock('../../src/dbconfig');

describe('createSubscriber', () => {
  it('connects to the database', async () => {
    await createSubscriber({ body: { email: 'test@example.com' } });

    expect(mysql.createConnection).toHaveBeenCalledWith(config);
  });

  it('does something', async () => {
    const response = await createSubscriber({ body: { email: 'test@example.com' } });

    expect(response.email).toBe('test@example.com');
  });
});
