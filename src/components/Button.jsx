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
  const { href, onClick, type, size, newTab, disabled, text } = props;

  const sizeClass = getSizeClass(size);
  const classes = [styles.btn, sizeClass];

  if (href) {
    const target = newTab ? '_blank' : null;
    return (
      <a ref={ref} className={classes.join(' ')} href={href} target={target}>
        {text}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button ref={ref} disabled={disabled} type={type} className={classes.join(' ')} onClick={onClick}>
      {text}
    </button>
  );
});

Button.propTypes = forbidExtraProps({
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button']),
  size: PropTypes.oneOf(['small', 'large']),
  disabled: PropTypes.bool,
  newTab: PropTypes.bool,
  text: PropTypes.string.isRequired,
});

Button.defaultProps = {
  href: null,
  onClick: () => {},
  type: 'button',
  size: 'large',
  disabled: false,
  newTab: false,
};

export default Button;
