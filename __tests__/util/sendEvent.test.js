import sendEvent from '../../src/util/sendEvent';

describe('sendEvent', () => {
  describe('when ga is defined', () => {
    beforeEach(() => {
      window.ga = jest.fn();
    });

    afterEach(() => {
      delete window.ga;
    });

    it('calls ga function', () => {
      sendEvent('category', 'action', 'label', 'value');

      expect(window.ga).toHaveBeenCalledWith('send', 'event', 'category', 'action', 'label', 'value');
    });
  });

  describe('when ga is not defined', () => {
    it('does not attempt to call ga', () => {
      expect(() => sendEvent('category', 'action', 'label', 'value')).not.toThrow();
    });
  });
});
