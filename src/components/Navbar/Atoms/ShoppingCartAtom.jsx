import React from 'react'
import ShoppingCartIcon from '../../../assets/ShoppingCart.png';
import styles from '../Navbar.module.css'


const ShoppingCartAtom = ({ onClick }) => {
    return(
        <>
        <a onClick={onClick} href="/checkout">
        <img className={styles.shoppingcarticon} 
        src={ShoppingCartIcon} alt="Shopping Cart Icon" /></a>
        </>
    )
}

export default ShoppingCartAtom