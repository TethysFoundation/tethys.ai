import mockAxios from 'jest-mock-axios';
import api from '../src/api';

jest.mock('../src/env', () => ({ BASE_URL: 'http://base.url' }));

describe('api', () => {
  it('configures the API base URL', () => {
    expect(mockAxios.create).toHaveBeenCalledWith({ baseURL: 'http://base.url' });
  });

  it('posts to /subscribers', () => {
    api.createSubscriber({ email: 'test@example.com', country: 'CA' });
    expect(mockAxios.post).toHaveBeenCalledWith('/subscribers', { email: 'test@example.com', country: 'CA' });
  });
});
