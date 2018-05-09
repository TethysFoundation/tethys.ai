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
      getByTestId('country-select').value = 'SGP';

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeTruthy();
      expect(subscribeButton).toHaveTextContent('Sending…');

      await wait(() => expect(subscribeButton).toHaveTextContent('Thanks!'));

      expect(api.createSubscriber).toHaveBeenCalledTimes(1);
      expect(api.createSubscriber).toHaveBeenCalledWith({ country: 'SGP', email: 'test@example.com' });
    });

    it('displays the selected country value', () => {
      const { getByTestId } = render(<SubscribeForm />);

      expect(getByTestId('selected-country')).toHaveTextContent('');

      getByTestId('country-select').value = 'CAN';
      Simulate.change(getByTestId('country-select'));

      expect(getByTestId('selected-country')).toHaveTextContent('CAN');
    });
  });

  describe('when the email address is blank', () => {
    it('does not make the API call and displays an error state', async () => {
      const { container, getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('country-select').value = 'SGP';

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
      getByTestId('country-select').value = 'SGP';

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeFalsy();
      expect(api.createSubscriber).not.toHaveBeenCalled();

      expect(container.querySelector('input[name="email"].error')).toBeInTheDOM();
    });
  });

  describe('when the country is blank', () => {
    it('does not make the API call and displays an error state', async () => {
      const { getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('email').value = 'test@example.com';

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeFalsy();
      expect(api.createSubscriber).not.toHaveBeenCalled();

      expect(getByTestId('country-wrapper').className).toContain('error');
    });
  });

  describe('when both are blank', () => {
    it('does not make the API call and displays an error state', async () => {
      const { container, getByText, getByTestId } = render(<SubscribeForm />);

      const subscribeButton = getByText('Submit');
      Simulate.click(subscribeButton);

      expect(subscribeButton.disabled).toBeFalsy();
      expect(api.createSubscriber).not.toHaveBeenCalled();

      expect(container.querySelector('input[name="email"].error')).toBeInTheDOM();
      expect(getByTestId('country-wrapper').className).toContain('error');
    });
  });
});
