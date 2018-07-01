import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { I18n } from 'react-i18next';
import PieCounter from './PieCounter';
import styles from '../assets/stylesheets/count_down_clock.css';

function formatDate(date) {
  const month = padDatePart(date.getMonth() + 1);
  const day = padDatePart(date.getDate());
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function padDatePart(d) {
  const str = d.toString();
  return str.length === 1 ? `0${str}` : str;
}

export default class CountDownClock extends React.Component {
  static propTypes = forbidExtraProps({
    endDate: PropTypes.instanceOf(Date).isRequired,
  });

  constructor(props) {
    super(props);
    this.endTime = props.endDate.getTime();
  }

  getDaysRemaining = () => {
    const currentTime = new Date().getTime();
    const msRemaining = Math.max(0, this.endTime - currentTime);
    return msRemaining / (1000 * 60 * 60 * 24);
  };

  getHoursRemaining = () => {
    const currentTime = new Date().getTime();
    const msRemaining = Math.max(0, this.endTime - currentTime);
    return (msRemaining / (1000 * 60 * 60)) % 24;
  };

  getMinutesRemaining = () => {
    const currentTime = new Date().getTime();
    const msRemaining = Math.max(0, this.endTime - currentTime);
    return (msRemaining / 1000 / 60) % 60;
  };

  getMillisRemaining = () => {
    const currentTime = new Date().getTime();
    const msRemaining = (this.endTime - currentTime) % 60000;
    return Math.max(0, msRemaining);
  };

  displayDaysRemaining = () => Math.floor(this.getDaysRemaining());

  displayMinutesRemaining = () => Math.floor(this.getMinutesRemaining());

  displaySecondsRemaining = () => Math.floor(this.getMillisRemaining() / 1000);

  displayHoursRemaining = () => Math.floor(this.getHoursRemaining());

  render() {
    const { endDate } = this.props;

    return (
      <I18n>
        {t => (
          <div className={styles.container}>
            <h2 data-testid="heading" className={styles.heading}>
              {t('countDown.heading', { endDate: formatDate(endDate) })}
            </h2>

            <div data-testid="counter-container" className={styles.countDown}>
              <PieCounter
                getValue={this.getDaysRemaining}
                displayValue={this.displayDaysRemaining}
                max={75}
                label={t('countDown.days')}
              />
              <PieCounter
                getValue={this.getHoursRemaining}
                displayValue={this.displayHoursRemaining}
                max={24}
                label={t('countDown.hours')}
              />
              <PieCounter
                getValue={this.getMinutesRemaining}
                displayValue={this.displayMinutesRemaining}
                max={60}
                label={t('countDown.minutes')}
              />
              <PieCounter
                getValue={this.getMillisRemaining}
                displayValue={this.displaySecondsRemaining}
                max={60000}
                label={t('countDown.seconds')}
              />
            </div>
          </div>
        )}
      </I18n>
    );
  }
}
