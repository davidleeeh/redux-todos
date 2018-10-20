/**
 * Action creator for adding a todo
 * 
 * @param {string} id 
 * @param {string} desc 
 */
export function addTodoAction(id, desc) {
  return {
    type: 'ADD_TODO',
    id: id,
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