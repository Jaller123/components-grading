import React from 'react'
import styles from '../Contact.module.css'

const ButtonAtom = ({ text, onClick }) => (
  <button className={styles.input} onClick={onClick}>
    {text}
  </button>
)

export default ButtonAtom