import React from 'react';
import { I18n } from 'react-i18next';
import ListItem from '../ListItem';
// eslint-disable-next-line import/no-unresolved
import networkImageWebP from '../../assets/images/img_tethys_network_vertical.png?webp';
import networkImage from '../../assets/images/img_tethys_network_vertical.png';
import checkImg from '../../assets/images/img_checkbox.svg';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/why_tethys_sections.css';

const SolutionSection = () => (
  <I18n>
    {t => (
      <section className={[homeStyles.valuePropSection, styles.listSection].join(' ')}>
        <h2 className={styles.heading}>
          {t('home.solution.title')}
        </h2>

        <div className={styles.listSectionInner}>
          <div className={[homeStyles.flexTextBlock, styles.flexTextBlock].join(' ')}>
            <h3 className={styles.listHeading}>
              {t('home.solution.description')}
            </h3>

            <ul className={styles.list}>
              <ListItem iconImage={checkImg} text={t('home.solution.list.unlimitedThroughput')} />
              <ListItem iconImage={checkImg} text={t('home.solution.list.consumerIncentivisation')} />
              <ListItem iconImage={checkImg} text={t('home.solution.list.semanticExtraction')} />
              <ListItem iconImage={checkImg} text={t('home.solution.list.temporalDatabase')} />
              <ListItem iconImage={checkImg} text={t('home.solution.list.statisticalVerification')} />
            </ul>
          </div>

          <div className={[homeStyles.flexImageBlock, styles.mainImage].join(' ')}>
            <picture>
              <source srcSet={networkImageWebP} type="image/webp" />
              <source srcSet={networkImage} type="image/png" />
              <img src={networkImage} alt="The decentralized Tethys network" />
            </picture>
          </div>
        </div>
      </section>
    )}
  </I18n>
);

export default SolutionSection;
