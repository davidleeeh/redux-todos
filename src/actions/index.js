
import uuidV4 from 'uuid/v4';
import * as api from '../util/api';

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

/**
 * Helper action creator to dispatch
 * RECEIVED_TODOS action when todos
 * are received from API.
 * 
 * @param {*} todos 
 */
function receiveTodos(todos) {
  return {
    type: 'RECEIVE_TODOS',
    todos: todos
  };
}

/**
 * Asynchronous action creator to fetch todos
 * from API.
 * 
 * @param {srting} filter 
 */
export function fetchTodos(filter) {
  return api.fetchTodos(filter).then((todos) => {
    return receiveTodos(todos);
  });
}