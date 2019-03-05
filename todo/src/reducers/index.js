import { ADDTODO } from '../actions';

const initialState = {
  todos: [],
  task: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
    const newTodo = {
      task: action.payload,
      id: Date.now(),
      completed: false
    }
      return {
        todos: [...state.todos, newTodo]
      }

    default:
      return state;
  }
}
