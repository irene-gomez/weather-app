import React from 'react';

const WeatherTemperature = props => {
    const { temperature } = props;
    return (
        <p>{`${temperature} ºC`}</p>
    )
};

export default WeatherTemperature;