import React from "react";
import TitleAtom from '../Atoms/TitleAtom';
import OrderSummaryOrganism from "./OrderSummaryOrganism";
import ButtonAtom from '../Atoms/ButtonAtom';
import styles from '../Checkout.module.css';

const OrdersContainerOrganism = ({ products, total, onRemove }) => {
    return (
        <div className={styles.ordersContainer}>
            <TitleAtom text="Shopping Cart" />
            <OrderSummaryOrganism products={products} total={total} onRemove={onRemove} />
            <ButtonAtom text="Checkout" />
        </div>
    );
};

export default OrdersContainerOrganism;
