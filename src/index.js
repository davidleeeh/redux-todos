import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import todosReducer from './reducers';
import TodosApp from './containers/todos-app';

const createStoreMiddleware = applyMiddleware()(createStore);
const store = createStoreMiddleware(todosReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodosApp></TodosApp>
    </Provider>
    , document.querySelector('.container')
  );
};

render();



