import React from "react";
import PropTypes from "prop-types";
import ProductBoxAtom from "./ProductBoxAtom";

const ProductCardMolecule = ({ product }) => (
    <ProductBoxAtom
        title={product.title}
        image={product.image}
        price={product.price}
    />
);

ProductCardMolecule.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired
};

export default ProductCardMolecule;

