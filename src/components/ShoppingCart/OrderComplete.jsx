import React from 'react'
import ButtonAtom from './Atoms/ButtonAtom'

const OrderComplete = () => {
  return (
    <div className={styles.checkoutPage}>
    <NavbarOrganism username={username} />
    <h1>Purchase Successful!</h1>
    <ButtonAtom text="Return to Homepage"/>
    <FooterOrganism />
  </div>
  )
}

export default OrderComplete