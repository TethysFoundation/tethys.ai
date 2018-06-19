import React from 'react';
import { I18n } from 'react-i18next';
import LazyLoad from 'react-lazyload';
// eslint-disable-next-line import/no-unresolved
import networkImageWebP from '../../assets/images/img_NetworkVisual.png?webp';
import networkImage from '../../assets/images/img_NetworkVisual.png';
import styles from '../../assets/stylesheets/home.css';

const ShareEconomySection = () => (
  <I18n>
    {t => (
      <section className={[styles.valuePropSection, styles.boxedSection].join(' ')}>
        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>{t('home.valueProp.shareEconomy.title')}</h2>

          <p>{t('home.valueProp.shareEconomy.description')}</p>
        </div>

        <div className={styles.flexImageBlock}>
          <LazyLoad offset={300} once>
            <picture>
              <source srcSet={networkImageWebP} type="image/webp" />
              <source srcSet={networkImage} type="image/png" />
              <img src={networkImage} alt="Network" />
            </picture>
          </LazyLoad>
        </div>
      </section>
    )}
  </I18n>
);

export default ShareEconomySection;
