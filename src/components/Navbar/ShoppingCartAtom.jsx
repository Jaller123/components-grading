import React from 'react'
import ShoppingCartIcon from '../../assets/ShoppingCart.png';
import styles from './Navbar.module.css'


const ShoppingCartAtom = () => {
    return(
        <>
        <img className={styles.shoppingcarticon} src={ShoppingCartIcon} alt="Shopping Cart Icon" />
        </>
    )
}

export default ShoppingCartAtom