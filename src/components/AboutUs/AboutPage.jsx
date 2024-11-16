import React from 'react';
import NavbarOrganism from '../Navbar/Organisms/NavbarOrganism';
import FooterOrganism from '../Footer/Organisms/FooterOrganism';
import AboutSectionOrganism from './Organisms/AboutSectionOrganism';
import TitleAtom from './Atoms/TitleAtom';
import SubtitleAtom from './Atoms/SubtitleAtom';
import styles from './About.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            <NavbarOrganism />
                <div className={styles.mainContent}>
                    <TitleAtom text="About us"/>
                    <SubtitleAtom text="We have everything you need for your home!"/>
                    <AboutSectionOrganism />
                </div>
                <FooterOrganism />
        </div>
    )
}

export default AboutPage