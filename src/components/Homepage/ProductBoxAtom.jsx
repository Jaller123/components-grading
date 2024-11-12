import React from 'react'
import PropTypes from 'prop-types'
import ImageAtom from './ImageAtom'
import TitleAtom from './TitleAtom'
import PriceAtom from './PriceAtom'
import styles from "./Homepage.module.css"
import AddToCartButtonAtom from './AddToCartBtnAtom'

const ProductBoxAtom = ({ title, image, price }) => {
    return(
        <>
           <div className={styles.productbox}>
                <ImageAtom src={image} alt={title} />
                <TitleAtom title={title} />
                <PriceAtom price={price} />
                <AddToCartButtonAtom />
           </div>
        </>
    )
};

ProductBoxAtom.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductBoxAtom