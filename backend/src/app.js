import ApiBuilder from 'claudia-api-builder';

const api = new ApiBuilder();

api.get('/hello', () => 'Hello, World!');

module.exports = api;
