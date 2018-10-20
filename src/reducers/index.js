/**
 * Reducer for the todos.
 * Currently the state is simply an array of todo items.
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          desc: action.desc,
          completed: false
        }
      ];

    case 'TOGGLE_TODO':
      return state.map((t) => {
        return t.id === action.id ? 
        {
          ...t,
          completed: !t.completed
        } :
        t;
      })
    default:
      return state;
  }
}