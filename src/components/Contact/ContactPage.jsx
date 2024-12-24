import React from 'react';
import NavbarOrganism from '../Navbar/Organisms/NavbarOrganism';
import FooterOrganism from '../Footer/Organisms/FooterOrganism';
import ContactFormContainerOrganism from './Organisms/ContactFormContainerOrganism'
import styles from './Contact.module.css'

const ContactPage = ({ username, onLogout }) => {
  return (
    <div className={styles.page}>
      <NavbarOrganism username={username} onLogout={onLogout} />
      <ContactFormContainerOrganism />
      <FooterOrganism />
    </div>
  );
};

export default ContactPage;
