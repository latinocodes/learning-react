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
        {name: event.target.value, age: 26},
        {name: event.target.value, age: 27}
      ]

    });
  };

  render() {
    
    // inline style in JSX
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm Jose</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age="29" changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[1].name} age="29" changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name} age="29" changed={this.nameChangeHandler}/>
      </div>

    );
  }
}

export default App;
