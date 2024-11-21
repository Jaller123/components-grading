import React, { useState } from 'react'
import NavbarOrganism from '../Navbar/Organisms/NavbarOrganism'
import FooterOrganism from '../Footer/Organisms/FooterOrganism'
import OrdersContainerOrganism from './Organisms/OrdersContainerOrganism'
import styles from './Checkout.module.css'

const CheckoutPage = () => {
    const [products, setProducts] = useState([
        { name: 'Wooden Chair', price: 49.99 },
    ])

    const total = products.reduce((sum, product) => product.price, 0)

    const handleRemoveProduct = (index) => {
        const updatedProducts = [...products]
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts)
    }

    return(
        <div className={styles.checkoutPage}>
            <NavbarOrganism />
            <OrdersContainerOrganism products={products} total={total} onRemove={handleRemoveProduct}/>
            <FooterOrganism />
        </div>
    )
}

export default CheckoutPage
