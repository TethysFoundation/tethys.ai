import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/button.pcss';

function getSizeClass(size) {
  let sizeClass = '';

  if (size === 'large') {
    sizeClass = styles.btnLarge;
  } else if (size === 'small') {
    sizeClass = styles.btnSmall;
  }

  return sizeClass;
}

const Button = React.forwardRef((props, ref) => {
  const {
    href, onClick, size, text,
  } = props;

  const sizeClass = getSizeClass(size);

  if (href) {
    return <a ref={ref} className={[styles.btn, sizeClass].join(' ')} href={href}>{text}</a>;
  }

  return <button ref={ref} className={[styles.btn, sizeClass].join(' ')} onClick={onClick}>{text}</button>;
});

Button.propTypes = forbidExtraProps({
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  text: PropTypes.string.isRequired,
});

Button.defaultProps = {
  href: null,
  onClick: () => {},
  size: 'large',
};

export default Button;
