export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';
export const CLEAR = 'CLEAR'

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

export const clearCompleted = () => {
  return {
    type: CLEAR
  }
}
