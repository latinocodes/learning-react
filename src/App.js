import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Jose</h1>
        <Person name="Jose" age="29"/>
        <Person name="Luis" age="23"/>
        <Person name="Joe" age="26"/>
        <Person name="Duke" age="19">I'm Learning React</Person>
        <Person name="Pepe" age="33"/>
      </div>

    );
  }
}

export default App;
