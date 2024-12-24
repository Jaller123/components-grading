import React from 'react'
import styles from '../Contact.module.css'

const InputFieldAtom = ({ placeholder, type = 'text'}) => (
  <div>
     <input type={type} placeholder={placeholder} className={styles.inputField} />
  </div>
)

export default InputFieldAtom