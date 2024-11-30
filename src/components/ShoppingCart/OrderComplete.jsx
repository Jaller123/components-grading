import React from 'react';
import NavbarOrganism from '../Navbar/Organisms/NavbarOrganism'
import FooterOrganism from '../Footer/Organisms/FooterOrganism'
import ButtonAtom from '../ShoppingCart/Atoms/ButtonAtom';
import styles from './Checkout.module.css';

const OrderComplete = ({ username, onReturnToHomepage }) => {
  return (
    <div className={styles.orderCompletePage}>
      <NavbarOrganism username={username} />
      <h1 className={styles.successMessage}>Purchase Successful!</h1>
      <ButtonAtom text="Return to Homepage" onClick={onReturnToHomepage} />
      <FooterOrganism />
    </div>
  );
};

export default OrderComplete;
