import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import api from '../api';
import CountryOptions from './CountryOptions';
import Button from './Button';
import sendEvent from '../util/sendEvent';
import styles from '../assets/stylesheets/subscribe_form.css';

class SubscribeForm extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.countryRef = React.createRef();
    this.buttonRef = React.createRef();

    const { t } = props;
    this.t = t;

    this.state = { submitted: false, selectedCountry: '' };
  }

  onCountrySelected = e => {
    this.setState({ selectedCountry: e.target.value });
  };

  submit = e => {
    e.preventDefault();

    this.buttonRef.current.disabled = true;
    this.buttonRef.current.innerHTML = this.t('success');

    api.createSubscriber({
      email: this.emailRef.current.value,
      country: this.countryRef.current.value,
    });

    this.setState({ submitted: true });

    sendEvent('generate_lead', { label: this.countryRef.current.value });
  };

  renderContent() {
    const { submitted } = this.state;
    return submitted ? this.renderFeedback() : this.renderForm();
  }

  renderFeedback() {
    return (
      <div className={styles.feedbackContainer}>
        <p>{this.t('home.subscribeForm.submitFeedback')}</p>
        <Button disabled size="small" text={this.t('success')} />
      </div>
    );
  }

  renderForm() {
    const { selectedCountry } = this.state;
    return (
      <form action="" onSubmit={this.submit}>
        <div className={styles.formInner}>
          <input
            data-testid="email"
            ref={this.emailRef}
            type="email"
            name="email"
            required
            placeholder={this.t('home.subscribeForm.email.placeholder')}
          />

          <div data-testid="country-wrapper" className={styles.countrySelector}>
            <div data-testid="selected-country" className={styles.selectedCountry}>
              {selectedCountry}
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

        <p className={styles.disclaimer}>{this.t('home.subscribeForm.wontShareEmail')}</p>

        <Button ref={this.buttonRef} type="submit" size="small" text={this.t('submit')} />
      </form>
    );
  }

  render() {
    return <div className={styles.container}>{this.renderContent()}</div>;
  }
}

export default translate()(SubscribeForm);
