import React from "react";
import { useCart } from '../../../../cartify-app/src/assets/context/CartContext';
import NavbarOrganism from "../Navbar/Organisms/NavbarOrganism";
import ProductContainer from "./Atoms/ProductContainer";
import ProductListOrganism from "./Organisms/ProductListOrganism";
import HomebackgroundAtom from "./Atoms/HomebackgroundAtom";
import FooterOrganism from "../Footer/Organisms/FooterOrganism";
import styles from "./Homepage.module.css";

const ProductPage = ({ username, onLogout }) => {

  const { addToCart } = useCart();

  return (
    <div className={styles.homePage}>
      <HomebackgroundAtom />
      <NavbarOrganism username={username} onLogout={onLogout}/>
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

export default React.memo(ProductPage);
