import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import '../../src/i18n';
import Index from '../../pages/index';

describe('Index', () => {
  test('renders the home page content', () => {
    const { queryByText } = render(<Index />);

    expect(
      queryByText('A decentralized network based on blockchain technology powering NextGen Semantic Web')
    ).toBeInTheDOM();

    expect(queryByText('Pre-sale starts 08/01/2018')).toBeInTheDOM();

    expect(queryByText('A Share Economy for Untapped Computing Power and Human Intelligence')).toBeInTheDOM();

    expect(queryByText('An Artificial Intelligence to Navigate and Organize Semantic Information')).toBeInTheDOM();

    expect(queryByText('An Infinitely Scalable Blockchain to Bring Long-term Memory to the Web')).toBeInTheDOM();

    expect(queryByText('Problem')).toBeInTheDOM();

    expect(queryByText('Solution')).toBeInTheDOM();

    expect(queryByText('Why Tethys?')).toBeInTheDOM();

    expect(queryByText('Learn More About Tethys')).toBeInTheDOM();

    expect(queryByText('Roadmap')).toBeInTheDOM();

    expect(queryByText('Subscribe for Updates')).toBeInTheDOM();

    expect(queryByText('Links')).toBeInTheDOM();

    expect(queryByText('© 2018 Tethys')).toBeInTheDOM();
  });
});
