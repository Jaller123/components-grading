import React from 'react'
import PropTypes from 'prop-types';
import styles from '../Contact.module.css'

const ButtonAtom = ({ text, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);

ButtonAtom.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonAtom;