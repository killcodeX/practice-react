import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name : 'Richie', age : 23},
      {name : 'Aish', age : 28},
      {name : 'Farhu', age : 25}
    ]
  }

  render(){
  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <h2>This is second heading</h2>
      <button>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Sex</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
}
}
export default App;
