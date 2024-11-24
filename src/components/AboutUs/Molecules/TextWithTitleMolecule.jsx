import React from 'react';
import TextBlockAtom from '../Atoms/TextBlockAtom'
import styles from '../About.module.css'

const TextWithTitleMolecule = ({ title, text }) => (
    <div className={styles.textWithTitle}>
        <TextBlockAtom title={title} text={text}/>
    </div>
)

export default TextWithTitleMolecule;