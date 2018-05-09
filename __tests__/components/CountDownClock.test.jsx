import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import tk from 'timekeeper';
import '../../src/i18n';
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
  const endDate = new Date(2018, 4, 18, 0, 0, 0, 0);
  tk.freeze(new Date(2018, 4, 3, 0, 0, 1, 500));

  it('renders correctly with a future endDate', () => {
    const { getByTestId } = render(<CountDownClock endDate={endDate} />);
    expect(getByTestId('counter-container')).toMatchSnapshot();
  });

  it('renders all zeros when the endDate has been reached', () => {
    tk.freeze(new Date(endDate.getTime() + 1000));

    const { getByTestId } = render(<CountDownClock endDate={endDate} />);
    expect(getByTestId('counter-container')).toMatchSnapshot();
  });

  it('renders the heading with the correct end date', () => {
    const { getByTestId } = render(<CountDownClock endDate={endDate} />);
    expect(getByTestId('heading')).toHaveTextContent('Pre-sale starts 05/18/2018');
  });
});
