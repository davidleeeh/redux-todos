/**
 * Reducer for individual todo item.
 * 
 * @param {*} state 
 * @param {*} action 
 */
function todoItemReducer(state, action) {
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
export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todoItemReducer(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map((t) => {
        return todoItemReducer(t, action);
      })
    default:
      return state;
  }
}

/**
 * Helper function to get filtered todos from the
 * state returned by todosReducer()
 * 
 * @param {*} state 
 * @param {*} filter 
 */
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'active':
      return state.filter((t) => {
        return !t.completed;
      });

    case 'completed':
      return state.filter((t) => {
        return t.completed;
      });

    default:
      return state;
  }
}

