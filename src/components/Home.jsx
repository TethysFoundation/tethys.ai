import React from 'react';
import CountDownClock from './CountDownClock';
import styles from '../assets/stylesheets/home.pcss';

const endDate = new Date(2018, 6, 1, 0, 0, 0);

const Home = () => (
  <React.Fragment>
    <h1 className={styles.title}>Welcome</h1>
    <CountDownClock endDate={endDate} />
  </React.Fragment>
);

export default Home;
