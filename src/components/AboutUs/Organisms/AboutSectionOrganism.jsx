import React from 'react';
import TextWithTitleMolecule from '../Molecules/TextWithTitleMolecule';
import ImageAtom from '../Atoms/ImageAtom';
import styles from '../About.module.css'

const AboutSectionOrganism = () => {
     const aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

     return (
        <section className={styles.aboutSection}>
            <TextWithTitleMolecule
                title="Our Story:"
                text={aboutText}
            />
            <ImageAtom
                src="../../../assets/AboutUsImage.png"
            />
        </section>
     );
};

export default AboutSectionOrganism;