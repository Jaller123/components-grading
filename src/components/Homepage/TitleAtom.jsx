import React from 'react'
import PropTypes from 'prop-types'

const TitleAtom = ({ title }) => <h3>{title}</h3>;

TitleAtom.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleAtom;