import React from 'react'
import PropTypes from 'prop-types'

const TitleAtom = ({ title }) => <h3>{title}</h3>;

TitleAtom.PropTypes = {
    title: PropTypes.string.isRequired
};

export default TitleAtom;