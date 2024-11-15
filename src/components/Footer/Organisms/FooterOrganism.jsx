import React from 'react'
import FooterColumnMolecule from '../Molecules/FooterColumnMolecule'
import SocialMediaMolecule from '../Molecules/SocialMediaMolecule'
import styles from '../Footer.module.css'

const FooterOrganism = () => {
    const companyLinks= ['Careers', 'Our Story', 'Terms and Conditions'];
    const helpLinks = ['FAQ', 'Shipping', 'Contact']
    const shopLinks = ['Sofas', 'Chairs', 'Tables']

    return (
        <footer className={styles.footer}>
            <div className={styles.columns}>
                <FooterColumnMolecule title="Company" links={companyLinks} />
                <FooterColumnMolecule title="Help" links={helpLinks} />
                <FooterColumnMolecule title="Online Shop" links={shopLinks} />
            </div>
            <div className={styles.social}>
                <h4>Follow Us!</h4>
                <SocialMediaMolecule />
            </div>
        </footer>
    );
}

export default FooterOrganism