import React from 'react';
import { I18n } from 'react-i18next';
import styles from '../assets/stylesheets/home.pcss';

const Footer = () => (
  <I18n>
    {t => (
      <footer className={styles.footer}>
        <div className={styles.copyright}>{t('footer.copyright')}</div>
      </footer>
    )}
  </I18n>
);

export default Footer;
