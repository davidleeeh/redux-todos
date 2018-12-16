
import uuidV4 from 'uuid/v4';

/**
 * Action creator for adding a todo
 * 
 * @param {string} id 
 * @param {string} desc 
 */
export function addTodoAction(desc) {
  return {
    type: 'ADD_TODO',
    id: uuidV4(),
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