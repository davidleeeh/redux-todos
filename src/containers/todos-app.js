import React from 'react';

import {addTodoAction, toggleTodoAction} from '../actions';

let nextId = 0;

export default class TodosApp extends React.Component {
  // A very naive approach with all JSX in the render function
  render() {
    const { store } = this.props;
    const items = store.getState();

    return (
      <div>
        <h1>Todos App</h1>
        <input ref={
          (node) => {
            this.input = node;
          }}
        />
        <button onClick={() => {
          store.dispatch(addTodoAction(++nextId, this.input.value));
          this.input.value = '';
        }}>
          Add Todo
        </button>

        <ul>
          {
            items.map((item) => {
              return (
                <li 
                  key={item.id.toString()}
                  style={{
                    textDecoration: item.completed ? 'line-through' : 'none'
                  }}
                  onClick={() => {
                    store.dispatch(toggleTodoAction(item.id));
                  }}
                >
                  {item.desc}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}