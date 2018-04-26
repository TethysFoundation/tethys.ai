import React from 'react';
import api from '../api';
import CountryOptions from './CountryOptions';
import styles from '../assets/stylesheets/subscribe_form.pcss';

class SubscribeForm extends React.Component {
  emailRef = React.createRef();
  countryRef = React.createRef();
  buttonRef = React.createRef();

  submit = () => {
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

  render() {
    return (
      <div className={styles.container}>
        <input data-testid="email" ref={this.emailRef} type="text" name="email" placeholder="email" />

        <select data-testid="country" ref={this.countryRef} name="country" defaultValue="">
          <CountryOptions />
        </select>

        <button ref={this.buttonRef} onClick={this.submit}>Subscribe</button>
      </div>
    );
  }
}

export default SubscribeForm;
