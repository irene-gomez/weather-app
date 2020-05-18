import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Location = ({ city }) => {
    return (
        <h1 className='location-title'>{city}</h1>
    )
};

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;