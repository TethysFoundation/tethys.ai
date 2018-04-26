import React from 'react';
import { render, Simulate, wait } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import api from '../../src/api';
import SubscribeForm from '../../src/components/SubscribeForm';

jest.mock('../../src/api');

describe('SubscribeForm', () => {
  it('calls the create subscriber API when the Subscribe button is clicked', async () => {
    const { getByTestId, getByText } = render(<SubscribeForm />);

    getByTestId('email').value = 'test@example.com';
    getByTestId('country').value = 'SG';

    const subscribeButton = getByText('Subscribe');
    Simulate.click(subscribeButton);

    expect(subscribeButton).toHaveTextContent('Sending…');

    await wait(() => expect(subscribeButton).toHaveTextContent('Thanks!'));

    expect(api.createSubscriber).toHaveBeenCalledTimes(1);
    expect(api.createSubscriber).toHaveBeenCalledWith({ country: 'SG', email: 'test@example.com' });
  });
});
