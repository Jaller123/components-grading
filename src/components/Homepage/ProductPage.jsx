import React from "react";
import NavbarMolecule from "../Navbar/Organisms/NavbarOrganism";
import ProductContainer from "./Atoms/ProductContainer";
import ProductListOrganism from "./Organisms/ProductListOrganism";
import HomebackgroundAtom from "./Atoms/HomebackgroundAtom";
import FooterOrganism from "../Footer/Organisms/FooterOrganism";
import styles from "./Homepage.module.css";

const ProductPage = ({ username, addToCart }) => {
  return (
    <div className={styles.homePage}>
      <HomebackgroundAtom />
      <NavbarMolecule username={username} />
      <div className={styles.productBackground}>
        <ProductContainer />
        <div className={styles.productList}>
          <ProductListOrganism addToCart={addToCart} />
        </div>
      </div>
      <FooterOrganism className={styles.footer} />
    </div>
  );
};

export default ProductPage;
