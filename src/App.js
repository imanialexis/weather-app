import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"

class App extends Component {
  render() {
    return (
      <div>
        {/* everything needs to be returned here */}
        <Titles /> 
        <Form />
      </div>
    );
  }
}

export default App;
 