import React from 'react'
import FooterLinkAtom from './FooterLinkAtom'
import styles from './Footer.module.css'

const FooterColumnMolecule = ({title, links}) => (
    <div className={styles.column}>
        <h4>{title}</h4>
        <div>
            {links.map((link, index) => (
                <FooterLinkAtom key={index} text={link} />
            ))}
        </div>
    </div>
) 

export default FooterColumnMolecule