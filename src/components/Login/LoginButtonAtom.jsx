import React from 'react';
import styles from './Login.module.css';

const LoginButtonAtom = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Login
  </button>
);

export default LoginButtonAtom;
