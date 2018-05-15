import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import api from '../api';
import CountryOptions from './CountryOptions';
import Button from './Button';
import sendEvent from '../util/sendEvent';
import styles from '../assets/stylesheets/subscribe_form.pcss';

class SubscribeForm extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = { submitted: false, selectedCountry: '' };

  onCountrySelected = (e) => {
    this.setState({ selectedCountry: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();

    this.buttonRef.current.disabled = true;
    this.buttonRef.current.innerHTML = this.props.t('success');

    api.createSubscriber({
      email: this.emailRef.current.value,
      country: this.countryRef.current.value,
    });

    this.setState({ submitted: true });

    sendEvent('conversion', 'subscribe', this.countryRef.current.value);
  };

  emailRef = React.createRef();
  countryRef = React.createRef();
  buttonRef = React.createRef();

  renderContent() {
    return this.state.submitted ? this.renderFeedback() : this.renderForm();
  }

  renderFeedback() {
    const { t } = this.props;
    return (
      <div className={styles.feedbackContainer}>
        <p>{t('home.subscribeForm.submitFeedback')}</p>
        <Button disabled size="small" text={t('success')} />
      </div>
    );
  }

  renderForm() {
    const { t } = this.props;
    return (
      <form action="" onSubmit={this.submit}>
        <div className={styles.formInner}>
          <input
            data-testid="email"
            ref={this.emailRef}
            type="email"
            name="email"
            required
            placeholder={t('home.subscribeForm.email.placeholder')}
          />

          <div data-testid="country-wrapper" className={styles.countrySelector}>
            <div data-testid="selected-country" className={styles.selectedCountry}>
              {this.state.selectedCountry}
            </div>

            <select
              data-testid="country-select"
              ref={this.countryRef}
              name="country"
              required
              onChange={this.onCountrySelected}
            >
              <CountryOptions />
            </select>
          </div>
        </div>

        <p className={styles.disclaimer}>{t('home.subscribeForm.wontShareEmail')}</p>

        <Button ref={this.buttonRef} type="submit" size="small" text={t('submit')} />
      </form>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderContent()}
      </div>
    );
  }
}

export default translate()(SubscribeForm);
