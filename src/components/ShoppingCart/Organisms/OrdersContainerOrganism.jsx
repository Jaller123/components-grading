import React from "react";
import TitleAtom from '../Atoms/TitleAtom';
import OrderSummaryOrganism from "./OrderSummaryOrganism";
import ButtonAtom from '../Atoms/ButtonAtom';
import styles from '../Checkout.module.css';

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

export default OrdersContainerOrganism;
