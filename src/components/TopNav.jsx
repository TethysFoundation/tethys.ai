import React from 'react';
import { I18n } from 'react-i18next';
import { WHITEPAPER_URL } from './Home';
import navLogo from '../assets/images/img_TethysLogo_Horizontal.png';
import background from '../assets/images/img_webBackground_textureCenterTop.jpg';
import backgroundRedHaloImage from '../assets/images/img_webBackground_redHalo.png';
import styles from '../assets/stylesheets/nav.css';

const TopNav = () => (
  <I18n>
    {t => (
      <nav className={styles.topNav} style={{ backgroundImage: `url(${background})` }}>
        <div className={styles.navInner}>
          <img className={[styles.redHalo, styles.navHalo].join(' ')} src={backgroundRedHaloImage} alt="" />
          <img className={styles.navLogo} src={navLogo} alt="Tethys" />

          <div className={styles.navLinks}>
            <a href={WHITEPAPER_URL} target="_blank">{t('nav.links.whitepaper')}</a>
          </div>
        </div>
      </nav>
    )}
  </I18n>
);

export default TopNav;
