import React from 'react';
import OrderProductMolecule from '../Molecules/OrderProductMolecule';
import styles from '../Checkout.module.css';

const OrderSummaryOrganism = ({ products, total, onRemove }) => {
    return (
        <div className={styles.ordersSummary}>
            <div className={styles.productsList}>
                {products.map((product, index) => (
                    <OrderProductMolecule
                        key={index}
                        name={product.name}
                        price={product.price}
                        onRemove={() => onRemove(index)}
                    />
                ))}
            </div>
            <div className={styles.totalSummary}>
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default OrderSummaryOrganism;
