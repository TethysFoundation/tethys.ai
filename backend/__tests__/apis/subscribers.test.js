import { createSubscriber } from '../../src/apis/subscribers';

describe('createSubscriber', () => {
  it('does something', async () => {
    const response = await createSubscriber({ rawBody: '{"email": "test@example.com"}' });

    expect(response.status).toBe(201);
  });
});
