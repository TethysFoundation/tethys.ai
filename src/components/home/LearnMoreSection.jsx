import React from 'react';
import { I18n } from 'react-i18next';
import { WHITEPAPER_URL } from '../Home';
import Button from '../Button';
import styles from '../../assets/stylesheets/home.pcss';

const LearnMoreSection = () => (
  <I18n>
    {t => (
      <section className={[styles.boxedSection, styles.wideSection, styles.learnMoreSection].join(' ')}>
        <h2 className={styles.heading}>{t('home.learnMore')}</h2>

        <span>
          <Button href={WHITEPAPER_URL} newTab text={t('home.viewWhitepaper')} />
          <Button href="#subscribe" text={t('home.subscribeButton')} />
        </span>
      </section>
    )}
  </I18n>
);

export default LearnMoreSection;
