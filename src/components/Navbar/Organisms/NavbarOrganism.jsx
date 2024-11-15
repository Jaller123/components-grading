import React from "react"
import styles from "../Navbar.module.css"
import Navlinks from "../Molecules/NavlinksMolecule";
import CartifyLogoAtom from "../Atoms/CartifyLogoAtom";
import ShoppingCartAtom from "../Atoms/ShoppingCartAtom";
import WelcomeMessageAtom from "../Atoms/WelcomeMessageAtom";

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
