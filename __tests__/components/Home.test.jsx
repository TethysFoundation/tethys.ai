import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import '../../src/i18n';
import Home from '../../src/components/Home';

describe('Home', () => {
  test('renders something', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText(/A decentralized currency based on blockchain technology/)).toBeInTheDOM();
  });
});
