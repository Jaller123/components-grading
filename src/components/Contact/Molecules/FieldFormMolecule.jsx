import React from 'react'
import InputFieldAtom from '../Atoms/InputFieldAtom'
import styles from '../Contact.module.css'

const FieldFormMolecule = ({ placeholder, type }) => (
  <div className={styles.fieldForm}>
    <InputFieldAtom placeholder={placeholder} type={type} />
  </div>
);

export default FieldFormMolecule;