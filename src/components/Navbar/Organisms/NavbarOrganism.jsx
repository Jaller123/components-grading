import React from 'react';
import styles from '../Navbar.module.css';
import CartifyLogoAtom from '../Atoms/CartifyLogoAtom';
import NavlinksMolecule from '../Molecules/NavlinksMolecule';
import ShoppingCartAtom from '../Atoms/ShoppingCartAtom';
import WelcomeMessageAtom from '../Atoms/WelcomeMessageAtom';

const NavbarMolecule = ({ username }) => {
    return (
      <nav className={styles.navbar}>
        <CartifyLogoAtom />
        <NavlinksMolecule />
        <ShoppingCartAtom />
        <WelcomeMessageAtom username={username} />
      </nav>
    );
  };
  

export default NavbarMolecule;
