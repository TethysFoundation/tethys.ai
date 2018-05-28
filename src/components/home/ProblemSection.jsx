import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { I18n } from 'react-i18next';
// eslint-disable-next-line import/no-unresolved
import centralizedImageWebP from '../../assets/images/img_centralized_web_crawling.png?webp';
import centralizedImage from '../../assets/images/img_centralized_web_crawling.png';
import xImg from '../../assets/images/img_x.svg';
import homeStyles from '../../assets/stylesheets/home.css';
import styles from '../../assets/stylesheets/home/problem_section.css';

const Problem = ({ text }) => <li><X />{text}</li>;

Problem.propTypes = forbidExtraProps({ text: PropTypes.string.isRequired });

const X = () => <img className={styles.xIcon} src={xImg} alt="" />;

const InfinitelyScalableSection = () => (
  <I18n>
    {t => (
      <section className={[homeStyles.valuePropSection, homeStyles.boxedSection, styles.problemSection].join(' ')}>
        <h2 className={styles.heading}>
          {t('home.problem.title')}
        </h2>

        <div className={styles.problemSectionInner}>
          <div className={[homeStyles.flexTextBlock, styles.flexTextBlock].join(' ')}>
            <h3 className={styles.listHeading}>
              {t('home.problem.description')}
            </h3>

            <ul className={styles.problemsList}>
              <Problem text={t('home.problem.list.limitedThroughput')} />
              <Problem text={t('home.problem.list.zeroParticipation')} />
              <Problem text={t('home.problem.list.shallowExtraction')} />
              <Problem text={t('home.problem.list.noTemporalDatabase')} />
              <Problem text={t('home.problem.list.noVerification')} />
            </ul>
          </div>

          <div className={[homeStyles.flexImageBlock, styles.problemImage].join(' ')}>
            <picture>
              <source srcSet={centralizedImageWebP} type="image/webp" />
              <source srcSet={centralizedImage} type="image/png" />
              <img src={centralizedImage} alt="Human brain" />
            </picture>
          </div>
        </div>
      </section>
    )}
  </I18n>
);

export default InfinitelyScalableSection;
