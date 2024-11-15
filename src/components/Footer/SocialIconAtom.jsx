import React from 'react'
import styles from './Footer.module.css'

const SocialIconAtom = ({ icon, alt }) => (
    <span className={styles.icon} aria-label={alt} style={{ backgroundImage: `url(${icon})` }} />
)

export default SocialIconAtom