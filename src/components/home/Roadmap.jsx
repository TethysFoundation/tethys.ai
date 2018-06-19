import React from 'react';
import { I18n } from 'react-i18next';
import LazyLoad from 'react-lazyload';
// eslint-disable-next-line import/no-unresolved
import roadmapImgWebP from '../../assets/images/img_roadmap.png?webp';
import roadmapImg from '../../assets/images/img_roadmap.png';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/roadmap.css';

const Roadmap = () => (
  <I18n>
    {t => (
      <section className={styles.roadmapSection}>
        <h2 className={[homeStyles.heading, styles.heading].join(' ')}>{t('home.roadmap.title')}</h2>

        <LazyLoad offset={200}>
          <picture>
            <source srcSet={roadmapImgWebP} type="image/webp" />
            <source srcSet={roadmapImg} type="image/png" />
            <img className={styles.roadmap} src={roadmapImg} alt="Tethys Roadmap" />
          </picture>
        </LazyLoad>
      </section>
    )}
  </I18n>
);

export default Roadmap;
