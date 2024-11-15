import React from 'react';
import styles from '../Homepage.module.css';

const AddToCartButtonAtom = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Add to Cart
  </button>
);

export default AddToCartButtonAtom;
