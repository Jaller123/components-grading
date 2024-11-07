import React from "react"
import styles from "./Navbar.module.css"
import Navlinks from "./NavlinksAtom";
import CartifyLogoAtom from "./CartifyLogoAtom";

const NavbarMolecule = () => {
    return (
        <>
                <nav className={styles.navbar}>
                    <CartifyLogoAtom />
                    <Navlinks />
                </nav>
        </>
    );
};


export default NavbarMolecule
