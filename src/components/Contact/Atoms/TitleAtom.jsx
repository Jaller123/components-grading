import React from 'react'
import PropTypes from 'prop-types';
import styles from '../Contact.module.css'

const TitleAtom = ({ text }) => <h1 className={styles.title}>{text}</h1>;

TitleAtom.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleAtom;