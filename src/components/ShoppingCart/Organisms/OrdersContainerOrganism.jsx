import React from "react";
import TitleAtom from '../Atoms/TitleAtom';
import OrderSummaryOrganism from "./OrderSummaryOrganism";
import ButtonAtom from '../Atoms/ButtonAtom';
import styles from '../Checkout.module.css';
import PropTypes from "prop-types";

const OrdersContainerOrganism = ({ products, total, onRemove, onCompleteOrder }) => {
    const handleCheckout = () => {
        if (products.length === 0) {
          alert("No products have been added! Please add items to your cart before checking out.");
        } else if (onCompleteOrder) {
            console.log("Checkout initiated. Calling onCompleteOrder function...");
            onCompleteOrder(); 
          } else {
            console.log("onCompleteOrder function is not defined!");
          }
        };
    return (
        <div className={styles.ordersContainer}>
            <TitleAtom text="Shopping Cart" />
            <OrderSummaryOrganism products={products} total={total} onRemove={onRemove} />
            <ButtonAtom text="Checkout" onClick={handleCheckout}/>
        </div>
    );
};

OrdersContainerOrganism.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCompleteOrder: PropTypes.func.isRequired, 
};

export default OrdersContainerOrganism;
