import React from 'react'
import PropTypes from 'prop-types'
import ImageAtom from './ImageAtom'
import TitleAtom from './TitleAtom'
import PriceAtom from './PriceAtom'
import styles from "../Homepage.module.css"
import AddToCartButtonAtom from './AddToCartBtnAtom'

const ProductBoxAtom = ({ id, title, image, price, addToCart }) => {
    const handleAddToCart = (e) => {
        e.preventDefault();
        console.log("Add to Cart clicked", { id, title, image, price }); 
        addToCart({ id, title, image, price });
      };
    return(
        <>
           <div className={styles.productbox}>
                <ImageAtom src={image} alt={title} />
                <TitleAtom title={title} />
                <PriceAtom price={price} />
                <AddToCartButtonAtom onClick={handleAddToCart}/>
           </div>
        </>
    )
};

ProductBoxAtom.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductBoxAtom