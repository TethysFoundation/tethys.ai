import React from 'react';
import { I18n } from 'react-i18next';
import { WHITEPAPER_URL } from '../../util/constants';
import Button from '../Button';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/learn_more_section.css';

const LearnMoreSection = () => (
  <I18n>
    {t => (
      <section className={[homeStyles.boxedSection, homeStyles.wideSection, styles.learnMoreSection].join(' ')}>
        <h2 className={[homeStyles.heading, styles.heading].join(' ')}>{t('home.learnMore')}</h2>

        <span>
          <Button href={WHITEPAPER_URL} newTab text={t('home.viewWhitepaper')} />
          <Button href="#subscribe" text={t('home.subscribeButton')} />
        </span>
      </section>
    )}
  </I18n>
);

export default LearnMoreSection;
