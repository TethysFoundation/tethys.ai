import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/pie_counter.scss';

const PieCounter = ({ value, max, label }) => {
  const progress = typeof value !== 'number' ? 0 : Math.floor((1 - (value / max)) * 100);

  return (
    <div className={styles.container}>
      <div className={[styles.pieWrapper, styles[`progress${Math.floor(progress)}`]].join(' ')}>
        <div className={styles.inner}>
          <div data-testid={`${label}-value`} className={styles.value}>{value}</div>
          <div className={styles.label}>{label}</div>
        </div>

        <div className={styles.pie}>
          <div className={[styles.leftSide, styles.halfCircle].join(' ')} />
          <div className={[styles.rightSide, styles.halfCircle].join(' ')} />
        </div>
        <div className={styles.shadow} />
      </div>
    </div>
  );
};

PieCounter.propTypes = forbidExtraProps({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
});

export default PieCounter;
