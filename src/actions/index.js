
let nextId = 0;

/**
 * Action creator for adding a todo
 * 
 * @param {string} id 
 * @param {string} desc 
 */
export function addTodoAction(desc) {
  return {
    type: 'ADD_TODO',
    id: ++nextId,
    desc: desc
  };
}

/**
 * Action creator for toggling a todo
 * 
 * @param {string} id 
 */
export function toggleTodoAction(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

/**
 * Action creator for setting visibility filter
 * 
 * @param {string} filter 
 */
export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
}