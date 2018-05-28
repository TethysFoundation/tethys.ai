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

  // eslint-disable-next-line react/sort-comp
  endTime = this.props.endDate.getTime();

  getDaysRemaining = () => {
    const currentTime = new Date().getTime();
    const msRemaining = Math.max(0, this.endTime - currentTime);
    return msRemaining / (1000 * 60 * 60 * 24);
  };

  displayDaysRemaining = () => Math.floor(this.getDaysRemaining());

  getHoursRemaining = () => {
    const currentTime = new Date().getTime();
    const msRemaining = Math.max(0, this.endTime - currentTime);
    return (msRemaining / (1000 * 60 * 60)) % 24;
  };

  displayHoursRemaining = () => Math.floor(this.getHoursRemaining());

  getMinutesRemaining = () => {
    const currentTime = new Date().getTime();
    const msRemaining = Math.max(0, this.endTime - currentTime);
    return (msRemaining / 1000 / 60) % 60;
  };

  displayMinutesRemaining = () => Math.floor(this.getMinutesRemaining());

  getMillisRemaining = () => {
    const endTime = this.props.endDate.getTime();
    const currentTime = new Date().getTime();
    const msRemaining = (endTime - currentTime) % 60000;
    return Math.max(0, msRemaining);
  };

  displaySecondsRemaining = () => Math.floor(this.getMillisRemaining() / 1000);

  render() {
    return (
      <I18n>
        {
          t => (
            <div className={styles.container}>
              <h2 data-testid="heading" className={styles.heading}>
                {t('countDown.heading', { endDate: formatDate(this.props.endDate) })}
              </h2>

              <div data-testid="counter-container" className={styles.countDown}>
                <PieCounter
                  getValue={this.getDaysRemaining}
                  displayValue={this.displayDaysRemaining}
                  max={45}
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
          )
        }
      </I18n>
    );
  }
}
