import 'regenerator-runtime/runtime';
import ApiBuilder from 'claudia-api-builder';
import { createSubscriber } from './apis/subscribers';

const api = new ApiBuilder();

api.post('/subscribers', createSubscriber, { success: 201 });

module.exports = api;
