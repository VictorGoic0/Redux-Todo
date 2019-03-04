import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.todos.map(input => (
    <Todo task={input.task} key={input.id} />
  ))
}

export default TodoList;
