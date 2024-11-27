import NavbarMolecule from '../Navbar/Organisms/NavbarOrganism';
import ProductContainer from './Atoms/ProductContainer';
import ProductListOrganism from './Organisms/ProductListOrganism';
import HomebackgroundAtom from './Atoms/HomebackgroundAtom';
import FooterOrganism from '../Footer/Organisms/FooterOrganism';
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
    <FooterOrganism className={styles.footer}/></div>
    );
};

export default ProductPage;
