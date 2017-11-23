import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jose', age: 28},
      {name: 'Joe', age: 26},
      {name: 'Duke', age: 27}
    ]
  }

  switchNameHandler = () => {
    console.log("Was clicked!");
    this.setState({
      persons: [
        {name: 'PEPE', age: 28},
        {name: 'Joe', age: 26},
        {name: 'Amigo', age: 27}
      ]
    });

  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 28},
        {name: 'Jaja', age: 26},
        {name: 'Hey', age: 27}
      ]

    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Jose</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age="29"/>
        <Person name={this.state.persons[1].name} age="29" changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name} age="29"/>
      </div>

    );
  }
}

export default App;
