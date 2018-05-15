import React from 'react';
import { I18n } from 'react-i18next';
import networkImage from '../../assets/images/img_NetworkVisual.png';
import styles from '../../assets/stylesheets/home.pcss';

const ShareEconomySection = () => (
  <I18n>
    {t => (
      <section className={[styles.valuePropSection, styles.boxedSection].join(' ')}>
        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>
            {t('home.valueProp.shareEconomy.title')}
          </h2>

          <p>
            {t('home.valueProp.shareEconomy.description')}
          </p>
        </div>

        <div className={styles.flexImageBlock}>
          <img src={networkImage} alt="Network" />
        </div>
      </section>
    )}
  </I18n>
);

export default ShareEconomySection;
