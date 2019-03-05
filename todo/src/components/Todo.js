import React from 'react';

const Todo = props => {
  return (
    <div onClick={() => props.toggleTodo(props.todo.id)}>
      <li>{props.todo.task}</li>
    </div>
  )
}

export default Todo;
