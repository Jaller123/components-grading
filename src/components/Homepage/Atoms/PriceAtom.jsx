import React from 'react'
import PropTypes from 'prop-types'

const PriceAtom = ({ price }) => <p>${price.toFixed(2)}</p>;

PriceAtom.propTypes = {
    price: PropTypes.number.isRequired,
};

export default PriceAtom;