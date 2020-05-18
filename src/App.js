import React from 'react';
import WeatherLocation from './components/WeatherLocation';

const options = { 
  weekday: 'long',
  month: 'long',
  day: 'numeric'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleDateString('es-ES', options),
    };
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="App">
          <WeatherLocation localDate={currentTime}/>
      </div>
    );
  }
}

export default App;
