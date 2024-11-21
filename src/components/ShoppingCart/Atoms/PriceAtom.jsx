import React from 'react'
import styles from '../Checkout.module.css'

const PriceAtom = ({price}) => <span className={styles.price}>${price}</span>

export default  PriceAtom