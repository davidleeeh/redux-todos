import { createStore, applyMiddleware } from 'redux';
import { throttle } from 'lodash';

import { loadState, saveState } from './util/state-utils';
import todosReducer from './reducers';
import actionLog from './middlewares/action-log';

const configureStore = () => {
  const preloadedState = loadState();

  // Usually a good practice to use action logger only
  // in non-production environment
  const middlewares = process.env.NODE_ENV !== 'production' ? [actionLog] : [];
  const store = createStore(todosReducer, preloadedState, applyMiddleware(...middlewares));

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
};

export default configureStore;