import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const todos = [
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
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  handleChanges = e => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task)
  }

  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <TodoList todos={this.props.todos} />
        <TodoForm handleChanges={this.handleChanges} addTodo={this.addTodo} task={this.state.task} />
        <button>Clear Completed</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: [...todos, ...state.todos],
        task: state.task
    };
};

export default connect(mapStateToProps, { addTodo })(App);
