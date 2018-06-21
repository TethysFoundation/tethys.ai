import React from 'react';
import { I18n } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import ListItem from '../ListItem';
// eslint-disable-next-line import/no-unresolved
import centralizedImageWebP from '../../assets/images/img_centralized_web_crawling.png?webp';
import centralizedImage from '../../assets/images/img_centralized_web_crawling.png';
import xImg from '../../assets/images/img_x.svg';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/why_tethys_sections.css';

const ProblemSection = () => (
  <I18n>
    {t => (
      <section className={[homeStyles.valuePropSection, homeStyles.boxedSection, styles.listSection].join(' ')}>
        <h2 className={styles.heading}>{t('home.problem.title')}</h2>

        <div className={styles.listSectionInner}>
          <div className={[homeStyles.flexTextBlock, styles.flexTextBlock].join(' ')}>
            <h3 className={styles.listHeading}>{t('home.problem.description')}</h3>

            <ul className={styles.list}>
              <ListItem iconImage={xImg} text={t('home.problem.list.limitedThroughput')} />
              <ListItem iconImage={xImg} text={t('home.problem.list.zeroParticipation')} />
              <ListItem iconImage={xImg} text={t('home.problem.list.shallowExtraction')} />
              <ListItem iconImage={xImg} text={t('home.problem.list.noTemporalDatabase')} />
              <ListItem iconImage={xImg} text={t('home.problem.list.noVerification')} />
            </ul>
          </div>

          <div className={[homeStyles.flexImageBlock, styles.mainImage].join(' ')}>
            <LazyLoad offset={300} once height={300}>
              <picture>
                <source srcSet={centralizedImageWebP} type="image/webp" />
                <source srcSet={centralizedImage} type="image/png" />
                <img src={centralizedImage} alt="Servers in a centralized network crawl the web" />
              </picture>
            </LazyLoad>
          </div>
        </div>
      </section>
    )}
  </I18n>
);

export default ProblemSection;
