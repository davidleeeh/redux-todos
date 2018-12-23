import { combineReducers } from "redux";
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
 * Reducer for the todos by Id.
 * 
 * @param {*} state 
 * @param {*} action 
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todoItemReducer(state[action.id], action)
      };
    
    default:
      return state;
  }
}

/**
 * Reducer for all todo ids
 * 
 * @param {*} state 
 * @param {*} action 
 */
const allIds = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.id
      ];
    
    default:
      return state;
  }
};

/**
 * Root reducer for todos
 */
const todosReducer = combineReducers({
  byId: byId,
  allIds: allIds
});

export default todosReducer;

/**
 * Helper function to get filtered todos from the
 * state returned by todosReducer()
 * 
 * @param {*} state 
 * @param {*} filter 
 */
export const getVisibleTodos = (state, filter) => {
  const allTodos = state.allIds.map(id => state.byId[id]);

  switch (filter) {
    case 'active':
      return allTodos.filter((t) => {
        return !t.completed;
      });

    case 'completed':
      return allTodos.filter((t) => {
        return t.completed;
      });

    default:
      return allTodos;
  }
}

