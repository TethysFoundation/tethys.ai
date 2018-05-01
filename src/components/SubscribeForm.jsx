import React from 'react';
import api from '../api';
import CountryOptions from './CountryOptions';
import styles from '../assets/stylesheets/subscribe_form.pcss';

class SubscribeForm extends React.Component {
  state = { errors: [] };
  emailRef = React.createRef();
  countryRef = React.createRef();
  buttonRef = React.createRef();

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
    return (
      <div className={styles.container}>
        <input
          data-testid="email"
          ref={this.emailRef}
          className={this.state.errors.includes('email') ? styles.error : null}
          type="text"
          name="email"
          placeholder="email"
        />

        <select
          data-testid="country"
          ref={this.countryRef}
          className={this.state.errors.includes('country') ? styles.error : null}
          name="country"
          defaultValue=""
        >
          <CountryOptions />
        </select>

        <button ref={this.buttonRef} onClick={this.submit}>Subscribe</button>
      </div>
    );
  }
}

export default SubscribeForm;
