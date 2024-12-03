import React from 'react';
import styles from '../Navbar.module.css';
import CartifyLogoAtom from '../Atoms/CartifyLogoAtom';
import NavlinksMolecule from '../Molecules/NavlinksMolecule';
import ShoppingCartAtom from '../Atoms/ShoppingCartAtom';
import WelcomeMessageAtom from '../Atoms/WelcomeMessageAtom';
import LogoutButtonAtom from '../Atoms/LogoutButtonAtom'

const NavbarOrganism = ({ username, onLogout }) => {
    return (
      <nav className={styles.navbar}>
        <CartifyLogoAtom />
        <NavlinksMolecule />
        <ShoppingCartAtom />
        <WelcomeMessageAtom username={username} />
        <LogoutButtonAtom onLogout={onLogout} />
      </nav>
    );
  };
  

export default NavbarOrganism;
