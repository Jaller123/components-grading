import React from 'react'
import styles from '../Contact.module.css'

const InputFieldAtom = ({ placeholder, type = 'text'}) => (
  <div>
    <input className={styles.input} type={type} placeholder={placeholder} />
  </div>
)

export default InputFieldAtom