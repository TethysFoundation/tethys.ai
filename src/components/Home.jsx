import React from 'react';
import Button from './Button';
import CountDownClock from './CountDownClock';
import SubscribeForm from './SubscribeForm';
import styles from '../assets/stylesheets/home.pcss';
import background from '../assets/images/background.png';

const preSaleDate = new Date(2018, 5, 1, 0, 0, 0);

const Home = () => (
  <React.Fragment>
    <TopNav />

    <div className={styles.backgroundImage} style={{ backgroundImage: `url(${background})` }} />

    <div className={styles.homeContent}>
      <section className={styles.heroSection}>
        <div className={styles.logo}>
          TETHYS LOGO
        </div>

        <h2 className={styles.heading}>
          A decentralized currency based on blockchain technology powering NextGen Semantic Web
        </h2>

        <Button href="/" text="View Whitepaper" />
        <Button href="#subscribe" text="Register for ICO" />
      </section>

      <section className={styles.valuePropSection}>
        <h2 className={styles.heading}>
          A Share Economy for Untapped Computing Power and Human Intelligence
        </h2>

        <p>
          End users can earn Tethys tokens for sharing bandwidth and resources, enabling rapid growth at a low cost.
        </p>
      </section>

      <section className={styles.valuePropSection}>
        <h2 className={styles.heading}>
          An Artificial Intelligence to Navigate and Organize Semantic Information
        </h2>

        <p>
          Robust extraction of complex semantic information powered by an unparalleled modular deep learning model
          designed to simplify the implementation and execution of A.I.
        </p>
      </section>

      <section className={styles.valuePropSection}>
        <h2 className={styles.heading}>
          An Infinitely Scalable Blockchain to Bring Long-term Memory to the Web
        </h2>

        <p>
          Serves as a memory base for the web in which users can monitor changes at any point in time. Supported by
          unique blockchain technology to store vast amounts of information on the web
        </p>
      </section>

      <section className={styles.smallSection}>
        <h2 className={styles.heading}>Learn More About Tethys</h2>

        <Button href="/" text="View Whitepaper" />
        <Button href="#subscribe" text="Register for ICO" />
      </section>

      <section className={styles.smallSection}>
        <CountDownClock endDate={preSaleDate} />
      </section>

      <section id="subscribe" className={[styles.smallSection, styles.boxedSection, styles.subscribeSection].join(' ')}>
        <h2 className={styles.heading}>Subscribe for Updates</h2>

        <div className={styles.subscribeForm}>
          <SubscribeForm />
          <small>We won&#39;t share your email address or send you any spam</small>
        </div>
      </section>
    </div>

    <Footer />
  </React.Fragment>
);

export default Home;

const TopNav = () => (
  <nav className={styles.topNav} style={{ backgroundImage: `url(${background})` }}>
    <span className={styles.navLogo}>Tethys Logo</span>

    <div className={styles.navLinks}>
      <a href="/">Why Tethys</a>
      <a href="/">Whitepaper</a>
      <a href="/">Overview</a>
      <a href="/">Roadmap</a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <a href="/">Privacy Policy</a> | <a href="/">Terms</a>
    </div>
    <div className={styles.copyright}>© 2018 Tethys</div>
  </footer>
);
