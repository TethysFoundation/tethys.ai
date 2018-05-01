/* eslint-disable compat/compat */

const mockAPI = {
  createSubscriber: jest.fn(() => Promise.resolve({ status: 201 })),
};

module.exports = {
  ...mockAPI,
  clearMocks: () => {
    mockAPI.createSubscriber.mockClear();
  },
};
