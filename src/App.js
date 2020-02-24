import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <h2>This is second heading</h2>
      <Person/>
    </div>
  );
}
}
export default App;
