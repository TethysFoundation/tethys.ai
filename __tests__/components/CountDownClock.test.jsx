import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import tk from 'timekeeper';
import CountDownClock from '../../src/components/CountDownClock';

describe('CountDownClock', () => {
  const endDate = new Date(new Date().getTime() + (15 * 24 * 60 * 60 * 1000));

  it('renders correctly with a future endDate', () => {
    const { getByTestId } = render(<CountDownClock endDate={endDate} />);

    expect(getByTestId('days-value')).toHaveTextContent('14');
    expect(getByTestId('hours-value')).toHaveTextContent('23');
    expect(getByTestId('minutes-value')).toHaveTextContent('59');
    expect(getByTestId('seconds-value')).toHaveTextContent('59');
  });

  it('renders all zeros when the endDate has been reached', () => {
    const time = new Date(endDate.getTime() + 1000);
    tk.freeze(time);

    const { getByTestId } = render(<CountDownClock endDate={endDate} />);

    expect(getByTestId('days-value')).toHaveTextContent('0');
    expect(getByTestId('hours-value')).toHaveTextContent('0');
    expect(getByTestId('minutes-value')).toHaveTextContent('0');
    expect(getByTestId('seconds-value')).toHaveTextContent('0');
  });
});
