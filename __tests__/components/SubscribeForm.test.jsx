import React from 'react';
import { render, Simulate, wait } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import '../../src/i18n';
import api from '../../src/api';
import SubscribeForm from '../../src/components/SubscribeForm';

jest.mock('../../src/api');

describe('SubscribeForm', () => {
  afterEach(() => {
    api.clearMocks();
  });

  describe('when the form is filled out correctly', () => {
    it('calls the create subscriber API when the Subscribe button is clicked', async () => {
      const { getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('email').value = 'test@example.com';
      getByTestId('country').value = 'SG';

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeTruthy();
      expect(subscribeButton).toHaveTextContent('Sending…');

      await wait(() => expect(subscribeButton).toHaveTextContent('Thanks!'));

      expect(api.createSubscriber).toHaveBeenCalledTimes(1);
      expect(api.createSubscriber).toHaveBeenCalledWith({ country: 'SG', email: 'test@example.com' });
    });
  });

  describe('when the email address is blank', () => {
    it('does not make the API call and displays an error state', async () => {
      const { container, getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('country').value = 'SG';

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeFalsy();
      expect(api.createSubscriber).not.toHaveBeenCalled();

      expect(container.querySelector('input[name="email"].error')).toBeInTheDOM();
    });
  });

  describe('when the email address is invalid', () => {
    it('does not make the API call and displays an error state', async () => {
      const { container, getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('email').value = 'test@example';
      getByTestId('country').value = 'SG';

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeFalsy();
      expect(api.createSubscriber).not.toHaveBeenCalled();

      expect(container.querySelector('input[name="email"].error')).toBeInTheDOM();
    });
  });

  describe('when the country is blank', () => {
    it('does not make the API call and displays an error state', async () => {
      const { container, getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('email').value = 'test@example.com';

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeFalsy();
      expect(api.createSubscriber).not.toHaveBeenCalled();

      expect(container.querySelector('select[name="country"].error')).toBeInTheDOM();
    });
  });

  describe('when both are blank', () => {
    it('does not make the API call and displays an error state', async () => {
      const { container, getByText } = render(<SubscribeForm />);

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeFalsy();
      expect(api.createSubscriber).not.toHaveBeenCalled();

      expect(container.querySelector('input[name="email"].error')).toBeInTheDOM();
      expect(container.querySelector('select[name="country"].error')).toBeInTheDOM();
    });
  });
});
