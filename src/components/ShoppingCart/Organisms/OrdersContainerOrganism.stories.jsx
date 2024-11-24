import React from 'react';
import OrdersContainerOrganism from './OrdersContainerOrganism';

export default {
    title: 'Components/ShoppingCart/Organisms/OrdersContainerOrganism',
    component: OrdersContainerOrganism,
};

export const Default = () => {
    const sampleProducts = [
        { name: 'Wooden Chair', price: 49.99 },
        { name: 'Dining Table', price: 149.99 },
        { name: 'Office Desk', price: 89.99 },
    ];

    const total = sampleProducts.reduce((sum, product) => sum + product.price, 0);

    const handleRemoveProduct = (index) => {
        alert(`Removed product at index ${index}`);
    };

    return (
        <OrdersContainerOrganism
            products={sampleProducts}
            total={total}
            onRemove={handleRemoveProduct} 
        />
    );
};
