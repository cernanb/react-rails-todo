import React, {Component} from 'react'

export default class TodoList extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => this.setState({todos: data}))
  }

  render() {
    
    return (
      <div>
        <h1>Current Todos</h1>
      </div>
    )
  }
}
