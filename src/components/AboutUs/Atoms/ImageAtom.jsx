import React from 'react'
import styles from '../About.module.css'

const ImageAtom = ({ src, }) => (
    <img className={styles.image} src={src}  />
)

export default ImageAtom;