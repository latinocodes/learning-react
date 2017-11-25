import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '12314dd', name: 'Jose', age: 28},
      {id: '13ddsf', name: 'Joe', age: 26},
      {id: '332rrs', name: 'Duke', age: 27}
    ],
    showPerson: false
  };

  changeNameHandler = (event, id) => {
    // find the index in the list
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // get the person and assign a copy to a new object
    // this is the same as const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};

    //get value from event
    person.name = event.target.value;

    // copy the entire list to be updated
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  };

  deleteNameHandler = (index) => {
    // don't use this because you are changing items by reference
    //const persons = this.state.persons;
    // use this intead
    const persons = [...this.state.persons];
    //or use
    //const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons})
    
  };

  showPersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
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

    let persons = null;

    if(this.state.showPerson){
        persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} 
                    age={person.age} 
                    key={person.id}
                    click={this.deleteNameHandler.bind(this, index)}
                    changed={(event)=>this.changeNameHandler(event, person.id)}
                    />
          })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I'm Jose</h1>
        <button style={style} onClick={this.showPersonHandler}>Show Names</button>
        {persons}
      </div>

    );
  }
}

export default App;
