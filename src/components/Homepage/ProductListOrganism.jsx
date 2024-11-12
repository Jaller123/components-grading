import React, { useEffect, useState } from 'react'
import { getProducts } from '../api'
import ProductListOrganism from './ProductListMolecule'

const ProductPage = () => {
    const [products, setProducts] = useState ([]);
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data)
            } catch (err) {
                setError(err.message || 'Failed to fetch Products');
            }
        };

        fetchProducts()
    }, [])

    return (
        <div>
            <h2>Products</h2>
            {error && <p style={{ color: 'red'}}>{error}</p>}
            <ProductListOrganism products={products} />
        </div>
    )
}

export default ProductPage;