import React from 'react';
import CountDownClock from './CountDownClock';
import SubscribeForm from './SubscribeForm';
import styles from '../assets/stylesheets/home.pcss';

const endDate = new Date(2018, 4, 15, 0, 0, 0);

const Home = () => (
  <React.Fragment>
    <h1 className={styles.title}>Welcome</h1>
    <CountDownClock endDate={endDate} />
    <SubscribeForm />
  </React.Fragment>
);

export default Home;
