import React from 'react';
import styles from '../About.module.css'

const TextBlockAtom = ({ title, text }) => (
    <div className={styles.textBlock}>
        <h3 className={styles.textBlockTitle}>{title}</h3>
        <p className={styles.textBlockContent}>{text}</p>
    </div>
)

export default TextBlockAtom