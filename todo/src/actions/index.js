export const ADDTODO = 'ADDTODO';

export const addTodo = task => {
  return {
    type: ADDTODO,
    payload: task
  }
}
