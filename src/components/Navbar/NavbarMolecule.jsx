import React from "react"
import styles from "./Navbar.module.css"
import Navlinks from "./NavlinksAtom";
import CartifyLogoAtom from "./CartifyLogoAtom";
import ShoppingCartAtom from "./ShoppingCartAtom";
import WelcomeMessageAtom from "./WelcomeMessageAtom";

const NavbarMolecule = () => {
    return (
        <>
                <nav className={styles.navbar}>
                    <CartifyLogoAtom />
                    <Navlinks />
                    <ShoppingCartAtom />
                    <WelcomeMessageAtom />
                </nav>
        </>
    );
};


export default NavbarMolecule
