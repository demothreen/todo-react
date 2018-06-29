import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBody from './Components/TodoBody/TodoBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todolist on React</h1>
        </header>
        <div className="App-intro">
            <TodoBody/>
        </div>
      </div>
    );
  }
}

export default App;
