import sendEvent from '../../src/util/sendEvent';

describe('sendEvent', () => {
  describe('when gtag is defined', () => {
    beforeEach(() => {
      window.gtag = jest.fn();
    });

    afterEach(() => {
      delete window.gtag;
    });

    it('calls gtag function', () => {
      sendEvent('category', 'action', 'label', 1);

      expect(window.gtag).toHaveBeenCalledWith('event', 'action', {
        event_category: 'category',
        event_label: 'label',
        value: 1,
      });
    });
  });

  describe('when gtag is not defined', () => {
    it('does not attempt to call gtag', () => {
      expect(() => sendEvent('category', 'action', 'label', 1)).not.toThrow();
    });
  });
});
