import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Create TodoList',
    id: 1528817084395,
    completed: false
  },
  {
    task: 'Learn Redux',
    id: 1528817084975,
    completed: false
  }
];

class App extends Component {
  state = {
    todos: [],
    task: ''
  }

  handleChanges = e => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <TodoList list={list} />
        <TodoForm handleChanges={this.handleChanges} />
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
