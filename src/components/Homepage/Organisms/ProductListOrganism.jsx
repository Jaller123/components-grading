import React, { useEffect, useState } from "react";
import { getProducts } from "../../api";
import ProductListMolecule from "../Molecules/ProductListMolecule";

const ProductListOrganism = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch Products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ProductListMolecule products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductListOrganism;
