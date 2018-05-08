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
    href, onClick, size, newTab, text,
  } = props;

  const sizeClass = getSizeClass(size);

  if (href) {
    const target = newTab ? '_blank' : null;
    return <a ref={ref} className={[styles.btn, sizeClass].join(' ')} href={href} target={target}>{text}</a>;
  }

  return <button ref={ref} className={[styles.btn, sizeClass].join(' ')} onClick={onClick}>{text}</button>;
});

Button.propTypes = forbidExtraProps({
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  newTab: PropTypes.bool,
  text: PropTypes.string.isRequired,
});

Button.defaultProps = {
  href: null,
  onClick: () => {},
  size: 'large',
  newTab: false,
};

export default Button;
