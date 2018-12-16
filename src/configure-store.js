import { createStore, applyMiddleware } from 'redux';
import { throttle } from 'lodash';

import { loadState, saveState } from './util/state-utils';
import todosReducer from './reducers';

const configureStore = () => {
  const preloadedState = loadState();
  const store = createStore(todosReducer, preloadedState, applyMiddleware());
  
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
};

export default configureStore;