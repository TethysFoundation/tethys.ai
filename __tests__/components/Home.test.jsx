import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import '../../src/i18n';
import Home from '../../src/components/Home';

describe('Home', () => {
  test('renders the home page content', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText('A decentralized network based on blockchain technology powering NextGen Semantic Web'))
      .toBeInTheDOM();

    expect(queryByText('A Share Economy for Untapped Computing Power and Human Intelligence')).toBeInTheDOM();

    expect(queryByText('An Artificial Intelligence to Navigate and Organize Semantic Information')).toBeInTheDOM();

    expect(queryByText('An Infinitely Scalable Blockchain to Bring Long-term Memory to the Web')).toBeInTheDOM();

    expect(queryByText('Learn More About Tethys')).toBeInTheDOM();

    expect(queryByText('Pre-sale starts 07/01/2018')).toBeInTheDOM();

    expect(queryByText('Subscribe for Updates')).toBeInTheDOM();

    expect(queryByText('Links')).toBeInTheDOM();

    expect(queryByText('© 2018 Tethys')).toBeInTheDOM();
  });
});
