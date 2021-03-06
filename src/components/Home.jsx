import React from 'react';
import TopNav from './TopNav';
import HeroSection from './home/HeroSection';
import ProblemSection from './home/ProblemSection';
import SolutionSection from './home/SolutionSection';
import WhyTethysSection from './home/WhyTethysSection';
import ShareEconomySection from './home/ShareEconomySection';
import SemanticWebSection from './home/SemanticWebSection';
import InfinitelyScalableSection from './home/InfinitelyScalableSection';
import LearnMoreSection from './home/LearnMoreSection';
import Roadmap from './home/Roadmap';
import MoreInfoSection from './home/MoreInfoSection';
import Footer from './Footer';
import styles from '../assets/stylesheets/home.css';
import background from '../assets/images/img_webBackground_textureCenterTop.jpg';
// eslint-disable-next-line import/no-unresolved
import backgroundRedHaloImageWebP from '../assets/images/img_webBackground_redHalo.png?webp';
import backgroundRedHaloImage from '../assets/images/img_webBackground_redHalo.png';
// eslint-disable-next-line import/no-unresolved
import backgroundGreedHaloImageWebP from '../assets/images/img_webBackground_greenHalo.png?webp';
import backgroundGreedHaloImage from '../assets/images/img_webBackground_greenHalo.png';

const Home = () => (
  <React.Fragment>
    <TopNav />

    <div className={styles.backgroundImage} style={{ backgroundImage: `url(${background})` }} />

    <picture>
      <source srcSet={backgroundRedHaloImageWebP} type="image/webp" />
      <source srcSet={backgroundRedHaloImage} type="image/png" />
      <img className={styles.redHalo} src={backgroundRedHaloImage} alt="" />
    </picture>

    <picture>
      <source srcSet={backgroundGreedHaloImageWebP} type="image/webp" />
      <source srcSet={backgroundGreedHaloImage} type="image/png" />
      <img className={styles.greenHalo} src={backgroundGreedHaloImage} alt="" />
    </picture>

    <div className={styles.homeContent}>
      <HeroSection />

      <ShareEconomySection />

      <SemanticWebSection />

      <InfinitelyScalableSection />

      <ProblemSection />

      <SolutionSection />

      <WhyTethysSection />

      <LearnMoreSection />

      <Roadmap />

      <MoreInfoSection />
    </div>

    <Footer />
  </React.Fragment>
);

export default Home;
