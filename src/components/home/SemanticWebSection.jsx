import React from 'react';
import { I18n } from 'react-i18next';
import LazyLoad from 'react-lazyload';
// eslint-disable-next-line import/no-unresolved
import semanticImageWebP from '../../assets/images/img_SemanticVisual.png?webp';
import semanticImage from '../../assets/images/img_SemanticVisual.png';
import styles from '../../assets/stylesheets/home.css';

const SemanticWebSection = () => (
  <I18n>
    {t => (
      <section className={[styles.valuePropSection, styles.reverseWrap].join(' ')}>
        <div className={styles.flexImageBlock}>
          <LazyLoad offset={300} once height={300}>
            <picture>
              <source srcSet={semanticImageWebP} type="image/webp" />
              <source srcSet={semanticImage} type="image/png" />
              <img src={semanticImage} alt="Semantic information extracted from a web page" />
            </picture>
          </LazyLoad>
        </div>

        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>{t('home.valueProp.semanticWeb.title')}</h2>

          <p>{t('home.valueProp.semanticWeb.description')}</p>
        </div>
      </section>
    )}
  </I18n>
);

export default SemanticWebSection;
