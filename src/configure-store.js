import { createStore, applyMiddleware } from 'redux';
import todosReducer from './reducers';

const configureStore = () => {
  // applyMiddleware() returns a store enhancer. The signature of
  // store enhancer is createStore => createStore.
  // Another way to apply store enhancer is to pass it as the last argument of
  // createStore:
  // 
  // const store = createStore(todosReducer, preloadedState, applyMiddleware());
  

  // Notice that the convention in Redux is to call it createStoreMiddleware.
  // I found that name misleading because it sounds like it creates middleware
  // instead of store. So I prefer call it createStoreWithMiddleware.
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  return createStoreWithMiddleware(todosReducer);
};

export default configureStore;