import React from 'react';
import { I18n } from 'react-i18next';
import SubscribeForm from '../SubscribeForm';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/more_info_section.css';

const MoreInfoSection = () => (
  <I18n>
    {t => (
      <section className={styles.moreInfoSection}>
        <div className={homeStyles.flexContainer}>
          <section
            id="subscribe"
            className={[homeStyles.boxedSection, styles.subscribeSection].join(' ')}
          >
            <h2 className={[homeStyles.heading, styles.heading].join(' ')}>{t('home.subscribeForm.title')}</h2>

            <div className={homeStyles.subscribeForm}>
              <SubscribeForm />
            </div>
          </section>

          <section className={[homeStyles.boxedSection, styles.linksSection].join(' ')}>
            <h2 className={[homeStyles.heading, styles.heading].join(' ')}>{t('home.links.title')}</h2>

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
