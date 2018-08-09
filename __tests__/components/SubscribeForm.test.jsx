import React from 'react';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import 'jest-dom/extend-expect';
import '../../src/i18n';
import api from '../../src/api';
import sendEvent from '../../src/util/sendEvent';
import SubscribeForm from '../../src/components/SubscribeForm';

jest.mock('../../src/api');
jest.mock('../../src/util/sendEvent', () => jest.fn());

describe('SubscribeForm', () => {
  afterEach(() => {
    api.clearMocks();
    cleanup();
  });

  describe('when the form is submitted', () => {
    it('calls the create subscriber API when the Subscribe button is clicked', async () => {
      const { getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('email').value = 'test@example.com';
      getByTestId('country-select').value = 'SGP';

      const subscribeButton = getByText('Submit');
      fireEvent.submit(subscribeButton);

      await wait(() => {
        expect(api.createSubscriber).toHaveBeenCalledTimes(1);
        expect(api.createSubscriber).toHaveBeenCalledWith({ country: 'SGP', email: 'test@example.com' });
      });
    });

    it('sends an analytical event', async () => {
      const { getByTestId, getByText } = render(<SubscribeForm />);

      getByTestId('email').value = 'test@example.com';
      getByTestId('country-select').value = 'SGP';

      const subscribeButton = getByText('Submit');
      fireEvent.submit(subscribeButton);

      await wait(() => expect(sendEvent).toHaveBeenCalledWith('generate_lead', { label: 'SGP' }));
    });

    it('displays feedback to the user', () => {
      const { container, getByTestId, queryByTestId, getByText, queryByText } = render(<SubscribeForm />);

      getByTestId('email').value = 'test@example.com';
      getByTestId('country-select').value = 'SGP';

      const subscribeButton = getByText('Submit');
      fireEvent.submit(subscribeButton);

      // removes the form
      expect(queryByText('Submit')).not.toBeInTheDocument();
      expect(queryByTestId('email')).not.toBeInTheDocument();
      expect(queryByTestId('country-select')).not.toBeInTheDocument();

      // displays feedback
      expect(container).toHaveTextContent('Thanks for subscribing');
      expect(getByText('Success').disabled).toBeTruthy();
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
    fireEvent.change(getByTestId('country-select'));

    expect(getByTestId('selected-country')).toHaveTextContent('CAN');
  });
});
