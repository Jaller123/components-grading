import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Navbar.module.css';

const WelcomeMessageAtom = ({ username }) => {
    return <div className={styles.welcomemessage}>Welcome, {username}</div>;
};

WelcomeMessageAtom.propTypes = {
  username: PropTypes.string.isRequired,
};

export default WelcomeMessageAtom;
