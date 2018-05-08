import React from 'react';
import { Head } from 'react-static';
import Button from './Button';
import CountDownClock from './CountDownClock';
import SubscribeForm from './SubscribeForm';
import styles from '../assets/stylesheets/home.pcss';
import background from '../assets/images/img_webBackground_textureCenterTop.jpg';
import backgroundRedHaloImage from '../assets/images/img_webBackground_redHalo.png';
import backgroundGreedHaloImage from '../assets/images/img_webBackground_greenHalo.png';
import mainLogo from '../assets/images/img_TethysLogo_Vertical.png';
import navLogo from '../assets/images/img_TethysLogo_Horizontal.png';
import networkImage from '../assets/images/img_NetworkVisual.png';
import semanticImage from '../assets/images/img_SemanticVisual.png';
import memoryImage from '../assets/images/img_MemoryVisual.png';

const polyfillURL = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,' +
  'Array.prototype.findIndex,Array.prototype.includes';

const whitepaperURL = '/Whitepaper-v1_7.pdf';

const preSaleDate = new Date(2018, 5, 1, 0, 0, 0);

const Home = () => (
  <React.Fragment>
    <Head>
      <script src={polyfillURL} />
      <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:500|Montserrat:400,500" rel="stylesheet" />
    </Head>

    <TopNav />

    <div className={styles.backgroundImage} style={{ backgroundImage: `url(${background})` }} />
    <img className={styles.redHalo} src={backgroundRedHaloImage} alt="" />
    <img className={styles.greenHalo} src={backgroundGreedHaloImage} alt="" />

    <div className={styles.homeContent}>
      <section className={styles.heroSection}>
        <img className={styles.logo} src={mainLogo} alt="Tethys" />

        <h2 className={styles.heading}>
          A decentralized currency based on blockchain technology powering NextGen Semantic Web
        </h2>

        <Button href={whitepaperURL} newTab text="View Whitepaper" />
        <Button href="#subscribe" text="Register for ICO" />
      </section>

      <section className={[styles.valuePropSection, styles.boxedSection].join(' ')}>
        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>
            A Share Economy for Untapped Computing Power and Human Intelligence
          </h2>

          <p>
            End users can earn Tethys tokens for sharing bandwidth and resources, enabling rapid growth at a low cost.
          </p>
        </div>

        <div className={styles.flexImageBlock}>
          <img src={networkImage} alt="Network" />
        </div>
      </section>

      <section className={styles.valuePropSection}>
        <div className={styles.flexImageBlock}>
          <img src={semanticImage} alt="Semantic information extracted from a web page" />
        </div>

        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>
            An Artificial Intelligence to Navigate and Organize Semantic Information
          </h2>

          <p>
            Robust extraction of complex semantic information powered by an unparalleled modular deep learning model
            designed to simplify the implementation and execution of A.I.
          </p>
        </div>
      </section>

      <section className={[styles.valuePropSection, styles.boxedSection].join(' ')}>
        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>
            An Infinitely Scalable Blockchain to Bring Long-term Memory to the Web
          </h2>

          <p>
            Serves as a memory base for the web in which users can monitor changes at any point in time. Supported by
            unique blockchain technology to store vast amounts of information on the web
          </p>
        </div>

        <div className={styles.flexImageBlock}>
          <img src={memoryImage} alt="Human brain" />
        </div>
      </section>

      <section className={[styles.boxedSection, styles.wideSection, styles.learnMoreSection].join(' ')}>
        <h2 className={styles.heading}>Learn More About Tethys</h2>

        <span>
          <Button href={whitepaperURL} newTab text="View Whitepaper" />
          <Button href="#subscribe" text="Register for ICO" />
        </span>
      </section>

      <section className={styles.wideSection}>
        <CountDownClock endDate={preSaleDate} />
      </section>

      <section>
        <div className={styles.flexContainer}>
          <section
            id="subscribe"
            className={[styles.boxedSection, styles.subscribeSection].join(' ')}
          >

            <h2 className={styles.heading}>Subscribe for Updates</h2>

            <div className={styles.subscribeForm}>
              <SubscribeForm />
              <small>We won&#39;t share your email address or send you any spam</small>
            </div>
          </section>

          <section className={[styles.boxedSection, styles.linksSection].join(' ')}>
            <h2 className={styles.heading}>Links</h2>

            <ul className={styles.linksList}>
              <li>
                <a href="https://github.com/TethysFoundation">Github</a>
              </li>

              <li>
                <a href="/">Telegram</a>
              </li>

              <li>
                <a href="/">Medium</a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>

    <Footer />
  </React.Fragment>
);

export default Home;

const TopNav = () => (
  <nav className={styles.topNav} style={{ backgroundImage: `url(${background})` }}>
    <div className={styles.navInner}>
      <img className={[styles.redHalo, styles.navHalo].join(' ')} src={backgroundRedHaloImage} alt="" />
      <img className={styles.navLogo} src={navLogo} alt="Tethys" />

      <div className={styles.navLinks}>
        <a href="/">Why Tethys</a>
        <a href={whitepaperURL} target="_blank">Whitepaper</a>
        <a href="/">Overview</a>
        <a href="/">Roadmap</a>
      </div>
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
