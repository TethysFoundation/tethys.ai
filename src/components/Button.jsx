import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/button.pcss';

const Button = ({ href, text }) => (
  <a className={styles.btn} href={href}>{text}</a>
);

Button.propTypes = forbidExtraProps({
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

export default Button;
