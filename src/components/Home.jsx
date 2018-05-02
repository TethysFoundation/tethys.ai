import React from 'react';
import Button from './Button';
import CountDownClock from './CountDownClock';
import SubscribeForm from './SubscribeForm';
import styles from '../assets/stylesheets/home.pcss';
import background from '../assets/images/background.png';

const preSaleDate = new Date(2018, 5, 1, 0, 0, 0);

const Home = () => (
  <React.Fragment>
    <nav className={styles.topNav} style={{ backgroundImage: `url(${background})` }}>
      <span className={styles.navLogo}>Tethys Logo</span>

      <div className={styles.navLinks}>
        <a href="/">Why Tethys</a>
        <a href="/">Whitepaper</a>
        <a href="/">Overview</a>
        <a href="/">Roadmap</a>
      </div>
    </nav>

    <picture className={styles.backgroundImage} style={{ backgroundImage: `url(${background})` }} />

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

      <section className={styles.homeSection}>
        <h2 className={styles.heading}>
          A Share Economy for Untapped Computing Power and Human Intelligence
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dolore ducimus esse hic neque, quae quis
          voluptatem. Accusantium cumque excepturi illo minima quidem? At eveniet ex laborum necessitatibus repellat.
        </p>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.heading}>
          An Artificial Intelligence to Navigate and Organize Semantic Information
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque dolorum eius eligendi enim est fuga id illo
          molestias neque praesentium qui quidem rem reprehenderit sequi sit voluptate, voluptatem voluptates.
        </p>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.heading}>
          An Infinitely Scalable Blockchain to Bring Long-term Memory to the Web
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam atque beatae maxime, mollitia
          officia
          quae sapiente voluptatem. Autem cumque deserunt eligendi eos hic in possimus repellat sint tenetur
          voluptatibus?
        </p>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.heading}>Learn More About Tethys</h2>

        <Button href="/" text="View Whitepaper" />
        <Button href="#subscribe" text="Register for ICO" />
      </section>

      <CountDownClock endDate={preSaleDate} />

      <div id="subscribe">
        <SubscribeForm />
      </div>
    </div>

    <footer>
      © 2018 Tethys
    </footer>
  </React.Fragment>
);

export default Home;
