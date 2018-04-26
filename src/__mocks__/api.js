/* eslint-disable compat/compat */

module.exports = {
  createSubscriber: jest.fn(() => Promise.resolve({ status: 201 })),
};
