import React from 'react';
import { I18n } from 'react-i18next';
import ListItem from '../ListItem';
import xImg from '../../assets/images/img_x.svg';
import checkImg from '../../assets/images/img_checkbox.svg';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/why_tethys_sections.css';

const WhyTethysSection = () => (
  <I18n>
    {t => (
      <section
        className={[
          homeStyles.valuePropSection,
          homeStyles.boxedSection,
          homeStyles.wideSection,
          styles.listSection,
          styles.whySection,
        ].join(' ')}
      >
        <div className={styles.whyInner}>
          <h2 className={styles.heading}>{t('home.whyTethys.title')}</h2>

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

            <div className={[homeStyles.flexTextBlock, styles.flexTextBlock].join(' ')}>
              <h3 className={styles.listHeading}>{t('home.solution.description')}</h3>

              <ul className={styles.list}>
                <ListItem iconImage={checkImg} text={t('home.solution.list.unlimitedThroughput')} />
                <ListItem iconImage={checkImg} text={t('home.solution.list.consumerIncentivisation')} />
                <ListItem iconImage={checkImg} text={t('home.solution.list.semanticExtraction')} />
                <ListItem iconImage={checkImg} text={t('home.solution.list.temporalDatabase')} />
                <ListItem iconImage={checkImg} text={t('home.solution.list.statisticalVerification')} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )}
  </I18n>
);

export default WhyTethysSection;
