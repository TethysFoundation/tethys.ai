import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import '../../src/i18n';
import Index from '../../pages/index';

describe('Index', () => {
  afterEach(cleanup);

  test('renders the home page content', () => {
    const { queryByText } = render(<Index />);

    expect(
      queryByText('A decentralized network based on blockchain technology powering NextGen Semantic Web')
    ).toBeInTheDocument();

    expect(queryByText('A Share Economy for Untapped Computing Power and Human Intelligence')).toBeInTheDocument();

    expect(queryByText('An Artificial Intelligence to Navigate and Organize Semantic Information')).toBeInTheDocument();

    expect(queryByText('An Infinitely Scalable Blockchain to Bring Long-term Memory to the Web')).toBeInTheDocument();

    expect(queryByText('Problem')).toBeInTheDocument();

    expect(queryByText('Solution')).toBeInTheDocument();

    expect(queryByText('Why Tethys?')).toBeInTheDocument();

    expect(queryByText('Learn More About Tethys')).toBeInTheDocument();

    expect(queryByText('Roadmap')).toBeInTheDocument();

    expect(queryByText('Subscribe for Updates')).toBeInTheDocument();

    expect(queryByText('Links')).toBeInTheDocument();

    expect(queryByText('© 2018 Tethys')).toBeInTheDocument();
  });
});
