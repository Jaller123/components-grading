import React from "react";
import PropTypes from "prop-types";
import ProductBoxAtom from "../Atoms/ProductBoxAtom";

const ProductCardMolecule = ({ product, addToCart }) => {
  if (!product) return null;

  return (
    <ProductBoxAtom
      id={product.id} 
      title={product.title}
      image={product.image}
      price={product.price}
      addToCart={addToCart} 
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
  addToCart: PropTypes.func.isRequired, 
};

export default ProductCardMolecule;
