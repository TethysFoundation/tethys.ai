import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { I18n } from 'react-i18next';
// eslint-disable-next-line import/no-unresolved
import networkImageWebP from '../../assets/images/img_tethys_network_vertical.png?webp';
import networkImage from '../../assets/images/img_tethys_network_vertical.png';
import checkImg from '../../assets/images/img_checkbox.svg';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/solution_section.css';

const Solution = ({ text }) => <li><Check />{text}</li>;

Solution.propTypes = forbidExtraProps({ text: PropTypes.string.isRequired });

const Check = () => <img className={styles.checkIcon} src={checkImg} alt="" />;

const InfinitelyScalableSection = () => (
  <I18n>
    {t => (
      <section className={[homeStyles.valuePropSection, styles.solutionSection].join(' ')}>
        <h2 className={styles.heading}>
          {t('home.solution.title')}
        </h2>

        <div className={styles.solutionSectionInner}>
          <div className={[homeStyles.flexTextBlock, styles.flexTextBlock].join(' ')}>
            <h3 className={styles.listHeading}>
              {t('home.solution.description')}
            </h3>

            <ul className={styles.solutionsList}>
              <Solution text={t('home.solution.list.unlimitedThroughput')} />
              <Solution text={t('home.solution.list.consumerIncentivisation')} />
              <Solution text={t('home.solution.list.semanticExtraction')} />
              <Solution text={t('home.solution.list.temporalDatabase')} />
              <Solution text={t('home.solution.list.statisticalVerification')} />
            </ul>
          </div>

          <div className={[homeStyles.flexImageBlock, styles.solutionImage].join(' ')}>
            <picture>
              <source srcSet={networkImageWebP} type="image/webp" />
              <source srcSet={networkImage} type="image/png" />
              <img src={networkImage} alt="Human brain" />
            </picture>
          </div>
        </div>
      </section>
    )}
  </I18n>
);

export default InfinitelyScalableSection;
