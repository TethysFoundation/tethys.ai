import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import '../../src/i18n';
import Home from '../../src/components/Home';

describe('Home', () => {
  test('renders the page', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText('A decentralized network based on blockchain technology powering NextGen Semantic Web'))
      .toBeInTheDOM();
  });

  test('renders the count down with the correct date', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText('Pre-sale starts 06/01/2018')).toBeInTheDOM();
  });
});
