import React from 'react';
import styles from './Login.module.css';

const CreateAccountBtnAtom = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Create an Account
  </button>
);

export default CreateAccountBtnAtom;
