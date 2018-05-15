import React from 'react';
import { I18n } from 'react-i18next';
import SubscribeForm from '../SubscribeForm';
import styles from '../../assets/stylesheets/home.pcss';

const MoreInfoSection = () => (
  <I18n>
    {t => (
      <section className={styles.moreInfoSection}>
        <div className={styles.flexContainer}>
          <section
            id="subscribe"
            className={[styles.boxedSection, styles.subscribeSection].join(' ')}
          >
            <h2 className={styles.heading}>{t('home.subscribeForm.title')}</h2>

            <div className={styles.subscribeForm}>
              <SubscribeForm />
            </div>
          </section>

          <section className={[styles.boxedSection, styles.linksSection].join(' ')}>
            <h2 className={styles.heading}>{t('home.links.title')}</h2>

            <ul className={styles.linksList}>
              <li>
                <a href="https://github.com/TethysFoundation">{t('home.links.github')}</a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    )}
  </I18n>
);

export default MoreInfoSection;
