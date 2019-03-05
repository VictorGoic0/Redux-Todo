import { ADDTODO, TOGGLETODO } from '../actions';

const initialState = {
  todos: [{
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
  }]
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
        ...state,
        todos: [...state.todos, newTodo]
      }

    case TOGGLETODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !state.completed
            }
          } return todo
        })
      }

    default:
      return state;
  }
}
