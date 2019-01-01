import { createStore, applyMiddleware } from 'redux';

import todosReducer from './reducers';
import actionLog from './middlewares/action-log';
import promiseSupport from './middlewares/promise-support';

const wrapStoreMiddlewares = (store, middlewares) => {
  // Usually it's more intuitive to specify middlewares by the
  // order that are executed from left to right.
  // But when wrapping the middlewares around raw dispatch function,
  // we need to wrap it with the last middleware to be executed.
  // Therefore we need to reverse the array first.
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch);
  });
}

const configureStore = () => {
  const store = createStore(todosReducer);
  const middlewares = [promiseSupport];
  
  // Usually a good practice to use action logger only
  // in non-production environment
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(actionLog);
  };

  wrapStoreMiddlewares(store, middlewares);

  return store;
};

export default configureStore;