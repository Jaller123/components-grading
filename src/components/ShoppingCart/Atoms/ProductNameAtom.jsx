import React from 'react'
import styles from '../Checkout.module.css'

const ProductNameAtom = ({ name }) => <span className={styles.productName}>{name}</span>

export default ProductNameAtom