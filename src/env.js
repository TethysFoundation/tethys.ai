const BASE_URL = process.env.NODE_ENV === 'production' ?
  'https://7jwcjesxi6.execute-api.us-east-1.amazonaws.com/latest' : 'http://localhost:3001';

export default {
  ...process.env,
  BASE_URL,
};
