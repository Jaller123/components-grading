import React from 'react'
import styles from '../Checkout.module.css'

const ButtonAtom = ({ text, onClick }) => (
    <button className={styles.button} onClick={onClick}>
        {text}
    </button>
)

export default ButtonAtom