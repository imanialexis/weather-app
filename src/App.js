import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API;

class App extends Component {
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined 
    }
    getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      console.log('this is the city =>',city)
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
      &APPID=${API_KEY}&units=imperial
      `);
      //takes api_call and converts it to json
      const data = await api_call.json();
      // console.log('this is the data => ',data)
      // console.log('this should be the temp',Math.floor(data.main.temp))
      this.setState({
        temperature : Math.floor(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined 

      })
    }
  render() {
    return (
      <div> 
        <Titles /> 
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          
          />
      </div>
    );
  }
}

export default App;
 