import React from 'react';
import { I18n } from 'react-i18next';
// eslint-disable-next-line import/no-unresolved
import memoryImageWebP from '../../assets/images/img_MemoryVisual.png?webp';
import memoryImage from '../../assets/images/img_MemoryVisual.png';
import styles from '../../assets/stylesheets/home.css';

const InfinitelyScalableSection = () => (
  <I18n>
    {t => (
      <section className={[styles.valuePropSection, styles.boxedSection].join(' ')}>
        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>
            {t('home.valueProp.infinitelyScalable.title')}
          </h2>

          <p>
            {t('home.valueProp.infinitelyScalable.description')}
          </p>
        </div>

        <div className={styles.flexImageBlock}>
          <picture>
            <source srcSet={memoryImageWebP} type="image/webp" />
            <source srcSet={memoryImage} type="image/png" />
            <img src={memoryImage} alt="Human brain" />
          </picture>
        </div>
      </section>
    )}
  </I18n>
);

export default InfinitelyScalableSection;
