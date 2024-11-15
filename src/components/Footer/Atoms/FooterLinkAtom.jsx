import React from 'react'
import styles from '../Footer.module.css'
const FooterLinkAtom = ({text}) => (
    <ul className={styles.link}>{text}</ul>
)

export default FooterLinkAtom