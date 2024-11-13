import React, { useEffect, useState } from 'react'
import { getProducts } from '../api'
import ProductListMolecule from './ProductListMolecule'

const ProductListOrganism = () => {
    const [products, setProducts] = useState ([]);
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log(data);
                setProducts(data)
            } catch (err) {
                setError(err.message || 'Failed to fetch Products');
            }
        };

        fetchProducts()
    }, [])

    return (
        <div>
            {error && <p style={{ color: 'red'}}>{error}</p>}
            <ProductListMolecule products={products} />
        </div>
    )
}

export default ProductListOrganism;