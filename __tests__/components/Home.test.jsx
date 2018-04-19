import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import Home from '../../src/components/Home';

describe('Home', () => {
  test('renders something', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText('welcome')).toBeInTheDOM();
  });
});
