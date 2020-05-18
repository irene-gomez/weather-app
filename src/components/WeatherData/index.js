import React from 'react';
import WeatherExtraInfo from '../WeatherExtraInfo';
import WeatherTemperature from '../WeatherTemperature';
import './styles.scss'

const WeatherData = ({ localDate }) => (
    <div className='weatherData__wrapper'>
        <WeatherTemperature
            temperature={22}
            weatherState={'cloud'}
        />
        <WeatherExtraInfo 
            localDate={localDate}
            maxTemperature={23}
            minTemperature={11}
        />
    </div>
);

export default WeatherData;