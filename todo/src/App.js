import React, { Component } from 'react';

import './App.css';
import Todo from './components/Todo';

class App extends React.Component {
  state = {
    todos: [
      { value: 'Walk the dog.' },
      { completed: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;