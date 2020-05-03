import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => (
    <div>
        <WeatherTemperature
            temperature={22}
            weatherState={'cloud'}
        />
        <WeatherExtraInfo 
            humidity={23}
            wind={'10 m/s'}
        />
    </div>
);

export default WeatherData;