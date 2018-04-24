import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/count_down_clock.pcss';

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
      <React.Fragment>
        <h2 className={styles.heading}>Time until {endDate.toDateString()}</h2>

        <div className={styles.countDown}>
          <div className={styles.timeComponent}>
            <span data-testid="days">{daysRemaining}</span>
            <div className={styles.label}>Days</div>
          </div>

          <div className={styles.timeComponent}>
            <span data-testid="hours">{hoursRemaining}</span>
            <div className={styles.label}>Hours</div>
          </div>

          <div className={styles.timeComponent}>
            <span data-testid="minutes">{minutesRemaining}</span>
            <div className={styles.label}>Minutes</div>
          </div>

          <div className={styles.timeComponent}>
            <span data-testid="seconds">{secondsRemaining}</span>
            <div className={styles.label}>Seconds</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
