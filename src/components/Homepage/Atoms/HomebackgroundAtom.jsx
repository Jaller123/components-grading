import React from "react"
import styles from '../Homepage.module.css'
import HomepageBackground from '../../../assets/homebg.png';

const HomebackgroundAtom = () => {
    return (
        <>
        <img className={styles.homebg} src={HomepageBackground} alt="Homepage Background"></img>
        </>
    )
}

export default HomebackgroundAtom