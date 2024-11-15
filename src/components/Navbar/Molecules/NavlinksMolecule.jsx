import React from "react"
import styles from '../Navbar.module.css'

const NavlinksMolecule = () => {
    return(
        <>
        <div>
            <ul className={styles.navlinks}>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
        </>
    )
}

export default NavlinksMolecule