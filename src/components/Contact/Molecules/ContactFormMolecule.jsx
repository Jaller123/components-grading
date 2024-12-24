import React from 'react';
import InputFieldAtom from '../Atoms/InputFieldAtom';
import ButtonAtom from '../Atoms/ButtonAtom';
import styles from '../Contact.module.css'

const ContactFormMolecule = () => (
  <form className={styles.form}>
    <InputFieldAtom type="text" placeholder="Name" />
    <InputFieldAtom type="email" placeholder="Email" />
    <InputFieldAtom type="tel" placeholder="Phone" />
    <ButtonAtom text="Submit" />
  </form>
);

export default ContactFormMolecule;