/**
 * Reducer for individual todo item.
 * 
 * @param {*} state 
 * @param {*} action 
 */
function todoReducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        desc: action.desc,
        completed: false
      };

    case 'TOGGLE_TODO':
      return state.id === action.id ? 
      {
        ...state,
        completed: !state.completed
      } :
      state;

    default: return state;
  }
}

/**
 * Reducer for the todos.
 * 
 * @param {*} state 
 * @param {*} action 
 */
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todoReducer(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map((t) => {
        return todoReducer(t, action);
      })
    default:
      return state;
  }
}

/**
 * Root reducer for the todos app
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function todosAppReducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action)
  };
}