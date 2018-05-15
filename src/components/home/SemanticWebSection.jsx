import React from 'react';
import { I18n } from 'react-i18next';
import semanticImage from '../../assets/images/img_SemanticVisual.png';
import styles from '../../assets/stylesheets/home.pcss';

const SemanticWebSection = () => (
  <I18n>
    {t => (
      <section className={[styles.valuePropSection, styles.reverseWrap].join(' ')}>
        <div className={styles.flexImageBlock}>
          <img src={semanticImage} alt="Semantic information extracted from a web page" />
        </div>

        <div className={styles.flexTextBlock}>
          <h2 className={styles.heading}>
            {t('home.valueProp.semanticWeb.title')}
          </h2>

          <p>
            {t('home.valueProp.semanticWeb.description')}
          </p>
        </div>
      </section>
    )}
  </I18n>
);

export default SemanticWebSection;
