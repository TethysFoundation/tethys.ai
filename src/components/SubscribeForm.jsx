import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import api from '../api';
import CountryOptions from './CountryOptions';
import styles from '../assets/stylesheets/subscribe_form.pcss';
import Button from './Button';

class SubscribeForm extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = { selectedCountry: '' };

  onCountrySelected = (e) => {
    this.setState({ selectedCountry: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();

    this.buttonRef.current.disabled = true;
    this.buttonRef.current.innerHTML = this.props.t('thanks');

    api.createSubscriber({
      email: this.emailRef.current.value,
      country: this.countryRef.current.value,
    });
  };

  emailRef = React.createRef();
  countryRef = React.createRef();
  buttonRef = React.createRef();

  render() {
    const { t } = this.props;

    return (
      <div className={styles.container}>
        <form action="" onSubmit={this.submit}>
          <span className={styles.row}>
            <input
              data-testid="email"
              ref={this.emailRef}
              type="email"
              name="email"
              required
              placeholder={t('home.subscribeForm.email.placeholder')}
            />

            <Button ref={this.buttonRef} type="submit" size="small" text={t('submit')} />
          </span>

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
        </form>
      </div>
    );
  }
}

export default translate()(SubscribeForm);
