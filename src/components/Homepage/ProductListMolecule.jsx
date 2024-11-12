import React from "react";
import PropTypes from "prop-types";
import ProductCardMolecule from './ProductCardMolecule'

const ProductListOrganism = ({ products }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {products.map((product) => (
            <ProductCardMolecule key={product.id} product={product} />
        ))}
    </div>
);

ProductListOrganism.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default ProductListOrganism;