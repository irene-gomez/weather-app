import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import './styles.scss';

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
    const sizeImg = '5x';

    return icon 
        ? <WeatherIcons name={icon} size={sizeImg}/>
        : <WeatherIcons name={'day-sunny'} size={sizeImg}/>;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperature__wrapper'>
        {getWeatherIcon(weatherState)}
        <p className='temperatureData'>{`${temperature}º`}</p>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;