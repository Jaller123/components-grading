import React from 'react'
import NavbarOrganism from '../Navbar/Organisms/NavbarOrganism'
import FooterOrganism from '../Footer/Organisms/FooterOrganism'
import TitleAtom from './Atoms/TitleAtom'
import ContactFormOrganism from './Organisms/ContactFormOrganism'
import styles from './Contact.module.css'

const ContactPage = () => {
  return (
      <div className={styles.contactPage}>
          <NavbarOrganism />
          <div className={styles.mainContent}>
              <TitleAtom text="Contact" />
              <div className={styles.formContainer}>
                <ContactFormOrganism />
              </div>
          </div>
          {/* Footer */}
          <FooterOrganism className={styles.footer}/>
      </div>
  );
};

export default ContactPage;
