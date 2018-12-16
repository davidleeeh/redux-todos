import { combineReducers } from "redux";
import todosReducer, * as fromTodos from './todos-reducer';


/**
 * Root reducer for the todos app
 */
export default combineReducers({
  todos: todosReducer
});

/**
 * Selector function for visible todo list
 * 
 * @param {*} state - the entire app state
 * @param {*} filter 
 */
export const getVisibleTodos = (state, filter) => {
  return fromTodos.getVisibleTodos(state.todos, filter);
}