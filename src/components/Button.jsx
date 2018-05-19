import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/button.css';

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
    href, onClick, type, size, newTab, disabled, text,
  } = props;

  const sizeClass = getSizeClass(size);

  if (href) {
    const target = newTab ? '_blank' : null;
    return <a ref={ref} className={[styles.btn, sizeClass].join(' ')} href={href} target={target}>{text}</a>;
  }

  return (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={[styles.btn, sizeClass].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
});

Button.propTypes = forbidExtraProps({
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit']),
  size: PropTypes.oneOf(['small', 'large']),
  disabled: PropTypes.bool,
  newTab: PropTypes.bool,
  text: PropTypes.string.isRequired,
});

Button.defaultProps = {
  href: null,
  onClick: () => {},
  type: null,
  size: 'large',
  disabled: false,
  newTab: false,
};

export default Button;
