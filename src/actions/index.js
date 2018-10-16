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