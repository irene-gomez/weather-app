import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => (
    <div>
        <WeatherTemperature
            temperature={22}
            weatherState={'cloud'}
        />
        <WeatherExtraInfo info={'extra info'}/>
    </div>
);

export default WeatherData;