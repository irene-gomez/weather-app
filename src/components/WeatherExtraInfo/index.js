import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const WeatherExtraInfo = ({ localDate}) => {
    return (
        <p className='extraInfo'>{`${localDate}`}</p>
    )
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;