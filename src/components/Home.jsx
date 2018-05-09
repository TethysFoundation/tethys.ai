import React from 'react';
import { Head } from 'react-static';
import { I18n } from 'react-i18next';
import Button from './Button';
import CountDownClock from './CountDownClock';
import SubscribeForm from './SubscribeForm';
import styles from '../assets/stylesheets/home.pcss';
import background from '../assets/images/img_webBackground_textureCenterTop.jpg';
import backgroundRedHaloImage from '../assets/images/img_webBackground_redHalo.png';
import backgroundGreedHaloImage from '../assets/images/img_webBackground_greenHalo.png';
import mainLogo from '../assets/images/img_TethysLogo_Vertical.png';
import navLogo from '../assets/images/img_TethysLogo_Horizontal.png';
import networkImage from '../assets/images/img_NetworkVisual.png';
import semanticImage from '../assets/images/img_SemanticVisual.png';
import memoryImage from '../assets/images/img_MemoryVisual.png';

const polyfillURL = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,' +
  'Array.prototype.findIndex,Array.prototype.includes';

const whitepaperURL = '/Whitepaper-v1_7.pdf';

const preSaleDate = new Date(2018, 5, 1, 0, 0, 0);

const Home = () => (
  <I18n>
    {
      t => (
        <React.Fragment>
          <Head>
            <script src={polyfillURL} />

            <link
              href="https://fonts.googleapis.com/css?family=Barlow+Condensed:500|Montserrat:400,500"
              rel="stylesheet"
            />
          </Head>

          <TopNav />

          <div className={styles.backgroundImage} style={{ backgroundImage: `url(${background})` }} />
          <img className={styles.redHalo} src={backgroundRedHaloImage} alt="" />
          <img className={styles.greenHalo} src={backgroundGreedHaloImage} alt="" />

          <div className={styles.homeContent}>
            <section className={styles.heroSection}>
              <img className={styles.logo} src={mainLogo} alt="Tethys" />

              <h2 className={styles.heading}>
                {t('home.headline')}
              </h2>

              <Button href={whitepaperURL} newTab text={t('home.viewWhitepaper')} />
              <Button href="#subscribe" text={t('home.subscribeButton')} />
            </section>

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
                <img src={memoryImage} alt="Human brain" />
              </div>
            </section>

            <section className={[styles.boxedSection, styles.wideSection, styles.learnMoreSection].join(' ')}>
              <h2 className={styles.heading}>{t('home.learnMore')}</h2>

              <span>
                <Button href={whitepaperURL} newTab text={t('home.viewWhitepaper')} />
                <Button href="#subscribe" text={t('home.subscribeButton')} />
              </span>
            </section>

            <section className={styles.wideSection}>
              <CountDownClock endDate={preSaleDate} />
            </section>

            <section>
              <div className={styles.flexContainer}>
                <section
                  id="subscribe"
                  className={[styles.boxedSection, styles.subscribeSection].join(' ')}
                >

                  <h2 className={styles.heading}>{t('home.subscribeForm.title')}</h2>

                  <div className={styles.subscribeForm}>
                    <SubscribeForm />
                    <small>{t('home.subscribeForm.wontShareEmail')}</small>
                  </div>
                </section>

                <section className={[styles.boxedSection, styles.linksSection].join(' ')}>
                  <h2 className={styles.heading}>{t('home.links.title')}</h2>

                  <ul className={styles.linksList}>
                    <li>
                      <a href="https://github.com/TethysFoundation">{t('home.links.github')}</a>
                    </li>

                    <li>
                      <a href="/">{t('home.links.telegram')}</a>
                    </li>

                    <li>
                      <a href="/">{t('home.links.medium')}</a>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>

          <Footer />
        </React.Fragment>
      )
    }
  </I18n>
);

export default Home;

const TopNav = () => (
  <I18n>
    {
      t => (
        <nav className={styles.topNav} style={{ backgroundImage: `url(${background})` }}>
          <div className={styles.navInner}>
            <img className={[styles.redHalo, styles.navHalo].join(' ')} src={backgroundRedHaloImage} alt="" />
            <img className={styles.navLogo} src={navLogo} alt="Tethys" />

            <div className={styles.navLinks}>
              <a href={whitepaperURL} target="_blank">{t('nav.links.whitepaper')}</a>
              <a href="/">{t('nav.links.overview')}</a>
            </div>
          </div>
        </nav>
      )
    }
  </I18n>
);

const Footer = () => (
  <I18n>
    {
      t => (
        <footer className={styles.footer}>
          <div>
            <a href="/">{t('footer.privacyPolicy')}</a> | <a href="/">{t('footer.terms')}</a>
          </div>
          <div className={styles.copyright}>{t('footer.copyright')}</div>
        </footer>
      )
    }
  </I18n>
);
