import React from 'react'
import FieldFormMolecule from '../Molecules/FieldFormMolecule'
import ButtonAtom from '../Atoms/ButtonAtom'
import styles from '../Contact.module.css'

const ContactFormOrganism = () => (
  <form className={styles.form}>
      <FieldFormMolecule placeholder="Name" type="text" />
      <FieldFormMolecule placeholder="Email" type="email" />
      <FieldFormMolecule placeholder="Phone" type="tel" />
      <ButtonAtom text="Submit" />
  </form>
);

export default ContactFormOrganism;