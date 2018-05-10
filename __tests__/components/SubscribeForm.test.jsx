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
      Simulate.submit(subscribeButton);

      expect(subscribeButton.disabled).toBeTruthy();
      expect(subscribeButton).toHaveTextContent('Thanks');

      await wait(() => {
        expect(api.createSubscriber).toHaveBeenCalledTimes(1);
        expect(api.createSubscriber).toHaveBeenCalledWith({ country: 'SGP', email: 'test@example.com' });
      });
    });
  });

  it('requires the email address and country fields', () => {
    const { container } = render(<SubscribeForm />);

    expect(container.querySelector('form input[type="email"]').required).toBeTruthy();
    expect(container.querySelector('form select[name="country"]').required).toBeTruthy();
  });

  it('displays the selected country value', () => {
    const { getByTestId } = render(<SubscribeForm />);

    expect(getByTestId('selected-country')).toHaveTextContent('');

    getByTestId('country-select').value = 'CAN';
    Simulate.change(getByTestId('country-select'));

    expect(getByTestId('selected-country')).toHaveTextContent('CAN');
  });
});
