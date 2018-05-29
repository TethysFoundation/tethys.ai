import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/list_item.css';

const ListItem = ({ text, iconImage }) => (
  <li><img className={styles.icon} src={iconImage} alt="" />{text}</li>
);

ListItem.propTypes = forbidExtraProps({
  text: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
});

export default ListItem;
