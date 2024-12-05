import React from "react";
import { useCart } from "../../../../cartify-app/src/assets/context/CartContext";
import NavbarOrganism from "../Navbar/Organisms/NavbarOrganism";
import FooterOrganism from "../Footer/Organisms/FooterOrganism";
import OrdersContainerOrganism from "./Organisms/OrdersContainerOrganism";
import styles from "./Checkout.module.css";

const CheckoutPage = ({ username, onLogout, onCompleteOrder }) => { 
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  console.log("Products in checkout:", cart);

  return (
    <div className={styles.checkoutPage}>
      <NavbarOrganism username={username} onLogout={onLogout} />
      <OrdersContainerOrganism
        products={cart}
        total={total}
        onRemove={removeFromCart}
        onCompleteOrder={onCompleteOrder} 
      />
      <FooterOrganism />
    </div>
  );
};

export default CheckoutPage;
