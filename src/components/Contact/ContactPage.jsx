import React from 'react'
import NavbarOrganism from '../Navbar/Organisms/NavbarOrganism'
import FooterOrganism from '../Footer/Organisms/FooterOrganism'
import TitleAtom from './Atoms/TitleAtom'
import ContactFormOrganism from './Organisms/ContactFormOrganism'
import styles from './Contact.module.css'

const ContactPage = ({ username, onLogout }) => {
  return (
      <>
          <NavbarOrganism username={username} onLogout={onLogout}/>
          <div>
              <TitleAtom text="Contact" />
              <div className={styles.formContainer}>
                <ContactFormOrganism />
              </div>
              <FooterOrganism className={styles.footer}/>
          </div>
      </>
  );
};

export default ContactPage;
