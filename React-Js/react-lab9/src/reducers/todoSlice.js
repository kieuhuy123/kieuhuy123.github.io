import { ADD_TODO, REMOVE_TODO } from "../actions/actionType";

const initState = {
  todos: [],
  id: 1,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          {
            id: state.id,
            title: action.payload,
          },
        ],
        id: state.id + 1,
      };
    }

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id != action.payload),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
