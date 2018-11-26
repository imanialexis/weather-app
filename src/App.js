import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API;

class App extends Component {
    // state {

    // }
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
      console.log('this is the data => ',data)

    }
  render() {
    return (
      <div> 
        <Titles /> 
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
 