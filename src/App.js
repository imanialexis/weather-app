import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API

class App extends Component {
  render() {
    return (
      <div>
        <Titles /> 
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
 