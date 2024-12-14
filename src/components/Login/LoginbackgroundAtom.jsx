import React from "react"
import styles from './Login.module.css'
import LoginBackground from '../../assets/loginbg.jpeg';

const LoginBackgroundAtom = () => {
    return (
        <>
        <img className={styles.background} src={LoginBackground} alt="Homepage Background"></img>
        </>
    )
}

export default LoginBackgroundAtom