import React from 'react';
import { I18n } from 'react-i18next';
import api from '../api';
import CountryOptions from './CountryOptions';
import styles from '../assets/stylesheets/subscribe_form.pcss';
import Button from './Button';

class SubscribeForm extends React.Component {
  state = { errors: [], selectedCountry: '' };

  onCountrySelected = (e) => {
    this.setState({ selectedCountry: e.target.value });
  };

  submit = () => {
    if (!this.validateForm()) return;

    this.buttonRef.current.disabled = true;
    this.buttonRef.current.innerHTML = 'Sending…';

    api
      .createSubscriber({
        email: this.emailRef.current.value,
        country: this.countryRef.current.value,
      })
      .then(() => {
        this.buttonRef.current.innerHTML = 'Thanks!';
      });
  };

  emailRef = React.createRef();
  countryRef = React.createRef();
  buttonRef = React.createRef();

  validateForm() {
    const errors = [];

    if (!this.emailRef.current.value || !this.emailRef.current.value.match(/\w+@\w+\.\w+/)) {
      errors.push('email');
    }

    if (!this.countryRef.current.value) {
      errors.push('country');
    }

    this.setState({ errors });
    return errors.length === 0;
  }

  render() {
    const countryStyles = [styles.countrySelector];
    if (this.state.errors.includes('country')) {
      countryStyles.push(styles.error);
    }

    return (
      <I18n>
        {
          t => (
            <div className={styles.container}>
              <span className={styles.row}>
                <input
                  data-testid="email"
                  ref={this.emailRef}
                  className={this.state.errors.includes('email') ? styles.error : null}
                  type="text"
                  name="email"
                  placeholder={t('home.subscribeForm.email.placeholder')}
                />

                <Button ref={this.buttonRef} size="small" onClick={this.submit} text={t('submit')} />
              </span>

              <div
                data-testid="country-wrapper"
                className={countryStyles.join(' ')}
              >
                <div data-testid="selected-country" className={styles.selectedCountry}>
                  {this.state.selectedCountry}
                </div>

                <select
                  data-testid="country-select"
                  ref={this.countryRef}
                  name="country"
                  defaultValue=""
                  onChange={this.onCountrySelected}
                >
                  <CountryOptions />
                </select>
              </div>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default SubscribeForm;
