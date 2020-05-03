import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: 'day-sunny',
    rain: 'day-rain',
    thunderstorm: 'day-thunderstorm',
    cloudy: 'day-cloudy',
    cloud: 'cloud',
    windy: 'day-windy',
    haze: 'day-haze',
    snow: 'day-snow',
    fog: 'day-fog'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    return icon 
        ? <WeatherIcons name={icon} size='2x'/>
        : <WeatherIcons name={'day-sunny'} size='2x'/>;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <p>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} ºC`}</span>
    </p>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;