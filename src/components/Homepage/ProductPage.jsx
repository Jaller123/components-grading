// src/components/HomePageOrganism.jsx
import React from 'react';
import NavbarMolecule from '../Navbar/NavbarMolecule';
import ProductContainer from './ProductContainer';
import ProductListOrganism from './ProductListOrganism';
import HomebackgroundAtom from './HomebackgroundAtom';
import styles from './Homepage.module.css';

const ProductPage = () => {
    return (
    <div className={styles.homePage}>
        <HomebackgroundAtom />

        <div className={styles.homePage}>
            <NavbarMolecule />

            <div className={styles.productBackground}>
                <ProductContainer />

                <div className={styles.productList}>
                    <ProductListOrganism />
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProductPage;
