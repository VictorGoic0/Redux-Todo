export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';

export const addTodo = task => {
  return {
    type: ADDTODO,
    payload: task
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLETODO,
    payload: id
  }
}
