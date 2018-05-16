import React from 'react';
import TopNav from './TopNav';
import HeroSection from './home/HeroSection';
import ShareEconomySection from './home/ShareEconomySection';
import SemanticWebSection from './home/SemanticWebSection';
import InfinitelyScalableSection from './home/InfinitelyScalableSection';
import LearnMoreSection from './home/LearnMoreSection';
import CountDownSection from './home/CountDownSection';
import MoreInfoSection from './home/MoreInfoSection';
import Footer from './Footer';
import styles from '../assets/stylesheets/home.pcss';
import background from '../assets/images/img_webBackground_textureCenterTop.jpg';
import backgroundRedHaloImage from '../assets/images/img_webBackground_redHalo.png';
import backgroundGreedHaloImage from '../assets/images/img_webBackground_greenHalo.png';

export const WHITEPAPER_URL = '/Whitepaper-v1_7.pdf';

const Home = () => (
  <React.Fragment>
    <TopNav />

    <div className={styles.backgroundImage} style={{ backgroundImage: `url(${background})` }} />
    <img className={styles.redHalo} src={backgroundRedHaloImage} alt="" />
    <img className={styles.greenHalo} src={backgroundGreedHaloImage} alt="" />

    <div className={styles.homeContent}>
      <HeroSection />

      <CountDownSection />

      <ShareEconomySection />

      <SemanticWebSection />

      <InfinitelyScalableSection />

      <LearnMoreSection />

      <MoreInfoSection />
    </div>

    <Footer />
  </React.Fragment>
);

export default Home;
