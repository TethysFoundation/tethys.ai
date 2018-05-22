import React from 'react';
import { I18n } from 'react-i18next';
import styles from '../assets/stylesheets/home.css';

const Footer = () => (
  <I18n>
    {t => (
      <footer className={styles.footer}>
        <p className={styles.footerContent}>
          <a href="/static/2018.05.16-privacy-policy.pdf">{t('footer.privacyPolicy')}</a>&nbsp;|&nbsp;
          <a href="/static/2018.05.16-terms.pdf">{t('footer.terms')}</a>
          <br />
          <span className={styles.copyright}>{t('footer.copyright')}</span>
        </p>
      </footer>
    )}
  </I18n>
);

export default Footer;
