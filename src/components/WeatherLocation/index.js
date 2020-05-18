import React from 'react';
import Location from '../Location';
import WeatherData from '../WeatherData';
import './styles.scss'

const WeatherLocation = ({ localDate }) => (
    <div className='weatherLocation__wrapper'>
        <Location city={'Pamplona'}/>
        <WeatherData localDate={localDate}/>
    </div>
);

export default WeatherLocation;