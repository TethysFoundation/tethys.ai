import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/count_down_clock.pcss';
import PieCounter from './PieCounter';

export default class CountDownClock extends React.Component {
  static propTypes = forbidExtraProps({
    endDate: PropTypes.instanceOf(Date).isRequired,
  });

  state = {
    daysRemaining: '–',
    hoursRemaining: '–',
    minutesRemaining: '–',
    secondsRemaining: '–',
  };

  componentDidMount() {
    this.tick();
    setInterval(this.tick, 1000);
  }

  tick = () => {
    const endTime = this.props.endDate.getTime();
    const currentTime = new Date().getTime();
    const msRemaining = Math.max(0, endTime - currentTime);

    this.setState({
      daysRemaining: Math.floor(msRemaining / (1000 * 60 * 60 * 24)),
      hoursRemaining: Math.floor((msRemaining / (1000 * 60 * 60)) % 24),
      minutesRemaining: Math.floor((msRemaining / 1000 / 60) % 60),
      secondsRemaining: Math.floor((msRemaining / 1000) % 60),
    });

    if (msRemaining === 0) {
      clearInterval(this.tick);
    }
  };

  render() {
    const { endDate } = this.props;
    const {
      daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining,
    } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Pre-sale starts {endDate.toDateString()}</h2>

        <div className={styles.countDown}>
          <PieCounter value={daysRemaining} max={30} label="Days" />
          <PieCounter value={hoursRemaining} max={24} label="Hours" />
          <PieCounter value={minutesRemaining} max={60} label="Minutes" />
          <PieCounter value={secondsRemaining} max={60} label="Seconds" />
        </div>
      </div>
    );
  }
}
