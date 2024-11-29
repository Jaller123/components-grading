import React from "react";
import PropTypes from "prop-types";
import ProductCardMolecule from "./ProductCardMolecule";

const ProductListMolecule = ({ products, addToCart }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {products.map((product) => (
      <ProductCardMolecule
        key={product.id}
        product={product}
        addToCart={addToCart}
      />
    ))}
  </div>
);

ProductListMolecule.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductListMolecule;
