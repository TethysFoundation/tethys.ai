import React from 'react';
import { I18n } from 'react-i18next';
import { WHITEPAPER_URL } from '../Home';
import Button from '../Button';
import mainLogo from '../../assets/images/img_TethysLogo_Vertical.png';
import styles from '../../assets/stylesheets/home.css';

const HeroSection = () => (
  <I18n>
    {t => (
      <section className={styles.heroSection}>
        <img className={styles.logo} src={mainLogo} alt="Tethys" />

        <h2 className={styles.heading}>
          {t('home.headline')}
        </h2>

        <Button href={WHITEPAPER_URL} newTab text={t('home.viewWhitepaper')} />
        <Button href="#subscribe" text={t('home.subscribeButton')} />
      </section>
    )}
  </I18n>
);

export default HeroSection;
