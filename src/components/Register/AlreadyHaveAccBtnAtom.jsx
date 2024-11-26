import React from 'react';
import styles from '../Login/Login.module.css';

const RegisterButtonAtom = ({ onClick }) => (
<div>
  <button type="button" className={styles.button} onClick={onClick}>
    Already have an account?
  </button>
  
</div>
);

export default RegisterButtonAtom;
