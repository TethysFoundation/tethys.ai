import axios from 'axios';
import env from './env';

const api = axios.create({ baseURL: env.BASE_URL });

export default {
  createSubscriber: ({ email, country }) => api.post('/subscribers', { email, country }),
};
