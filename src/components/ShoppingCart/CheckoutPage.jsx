import React, { useState } from 'react'
import NavbarOrganism from '../Navbar/Organisms/NavbarOrganism'
import FooterOrganism from '../Footer/Organisms/FooterOrganism'
import OrdersContainerOrganism from './Organisms/OrdersContainerOrganism'
import styles from './Checkout.module.css'

const CheckoutPage = ({ username, products, removeFromCart, onCompleteOrder }) => {
  const total = products.reduce((sum, product) => sum + product.price, 0);
  console.log('Products in checkout:', products); 
  return (
    <div className={styles.checkoutPage}>
      <NavbarOrganism username={username} />
      <OrdersContainerOrganism
        products={products}
        total={total}
        onRemove={removeFromCart}
        onCompleteOrder={onCompleteOrder}
      />
      <FooterOrganism />
    </div>
  );
};

export default CheckoutPage;
