import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Link to="/todos">Todos</Link>
      </div>

    )
  }
}

export default App;
