import React from 'react';
import PropTypes from 'prop-types';

const ImageAtom = ({ src, alt }) => (
    <img src={src} alt={alt} style={{ width: '100%'}}></img>
);

ImageAtom.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default ImageAtom;
