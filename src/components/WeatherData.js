import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={22}/>
        <WeatherExtraInfo info={"extra info"}/>
    </div>
);

export default WeatherData;