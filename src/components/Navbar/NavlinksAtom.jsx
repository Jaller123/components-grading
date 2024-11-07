import React from "react"
import styles from './Navbar.module.css'

const NavlinksAtom = () => {
    return(
        <>
        <div>
            <ul className={styles.navlinks}>
                <li><a href="default.asp">Home</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>
        </>
    )
}

export default NavlinksAtom