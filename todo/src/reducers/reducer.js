import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/actions';

const initialState = {
  todos: [
    {
      value: "Walk the iguana",
      completed: false
    },
    {
      value: "Feed the bearded dragon",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        value: action.payload,
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
        action.payload === index ? { ...todo, completed: !todo.completed } : todo
        )
      }
    default:
      return state;
  }
}

export default reducer;