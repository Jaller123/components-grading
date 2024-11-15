// ProductCardMolecule.jsx
import React from "react";
import PropTypes from "prop-types";
import ProductBoxAtom from "../Atoms/ProductBoxAtom";

const ProductCardMolecule = ({ product }) => {
    if (!product) return null; 

    return (
        <ProductBoxAtom
            title={product.title}
            image={product.image}
            price={product.price}
        />
    );
};

ProductCardMolecule.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCardMolecule;
