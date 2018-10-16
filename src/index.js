import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import todosReducer from './reducers';
import TodosApp from './containers/todos-app';

const createStoreMiddleware = applyMiddleware()(createStore);
const store = createStoreMiddleware(todosReducer);

const render = () => {
  ReactDOM.render(
    <TodosApp store={store}></TodosApp>
    , document.querySelector('.container')
  );
};

// Subscribe to store event so we can render to whole
// app when state is changed.
store.subscribe(render);

render();



