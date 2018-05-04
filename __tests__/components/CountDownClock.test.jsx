import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import tk from 'timekeeper';
import CountDownClock from '../../src/components/CountDownClock';

jest.mock('../../src/components/PieCounter', () =>
  jest.fn(props => (
    <div>
      <span>{props.getValue()}</span>
      <span>{props.displayValue()}</span>
      <span>{props.max}</span>
      <span>{props.label}</span>
    </div>
  )));

describe('CountDownClock', () => {
  const endDate = new Date(new Date().getTime() + (15 * 24 * 60 * 60 * 1000));
  tk.freeze(new Date(new Date().getTime() + 1000));

  it('renders correctly with a future endDate', () => {
    const { getByTestId } = render(<CountDownClock endDate={endDate} />);
    expect(getByTestId('counter-container')).toMatchSnapshot();
  });

  it('renders all zeros when the endDate has been reached', () => {
    const time = new Date(endDate.getTime() + 1000);
    tk.freeze(time);

    const { getByTestId } = render(<CountDownClock endDate={endDate} />);
    expect(getByTestId('counter-container')).toMatchSnapshot();
  });

  it('renders the heading with the correct end date', () => {
    const { getByTestId } = render(<CountDownClock endDate={endDate} />);
    expect(getByTestId('heading')).toHaveTextContent('Pre-sale starts 05/18/2018');
  });
});
