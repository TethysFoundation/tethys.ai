import React from 'react';
import CountDownClock from '../CountDownClock';
import styles from '../../assets/stylesheets/home.pcss';

const PRE_SALE_DATE = new Date(2018, 5, 1, 0, 0, 0);

const CountDownSection = () => (
  <section className={styles.wideSection}>
    <CountDownClock endDate={PRE_SALE_DATE} />
  </section>
);

export default CountDownSection;
