import React from 'react';
import TitleAtom from '../Atoms/TitleAtom';
import ContactFormMolecule from '../Molecules/ContactFormMolecule';
import styles from '../Contact.module.css'


const ContactFormContainerOrganism = () => (
  <div className={styles.contactContainer}>
    <TitleAtom text="Contact" />
    <ContactFormMolecule />
  </div>
);

export default ContactFormContainerOrganism;