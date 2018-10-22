import React from 'react';

import {addTodoAction, toggleTodoAction, setVisibilityFilter} from '../actions';

let nextId = 0;

export default class TodosApp extends React.Component {
  // A very naive approach with all JSX in the render function
  render() {
    const { store } = this.props;
    const {todos, visibilityFilter} = store.getState();
    const activeFilter = visibilityFilter;

    return (
      <div>
        {/* Input Bar */}
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

        {/* Item List */}
        <ul>
          {
            this.applyVisibilityFilter(todos, activeFilter).map((item) => {
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

        {/* Visibility Filters */}
        <p>
        Show:
        {'  '}
        {this.renderFilterLink('SHOW_ALL', 'All', activeFilter === 'SHOW_ALL')}

        {'  '}
        {this.renderFilterLink('SHOW_ACTIVE', 'Active', activeFilter === 'SHOW_ACTIVE')}


        {'  '}
        {this.renderFilterLink('SHOW_COMPLETED', 'Completed', activeFilter === 'SHOW_COMPLETED')}
      </p>
      </div>
    );
  }

  applyVisibilityFilter(todos, filter) {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return todos.filter((t) => {
          return !t.completed;
        });

      case 'SHOW_COMPLETED':
        return todos.filter((t) => {
          return t.completed;
        });

      default:
        return todos;
    }
  }

  renderFilterLink(filterType, filterLabel, isSelected) {
    const { store } = this.props;

    if (isSelected) {
      return <span>{filterLabel}</span> 
    } else {
      return (
        <a href="#"
            onClick={(e) => {
              e.preventDefault();
              store.dispatch(setVisibilityFilter(filterType))
            }}
          >
            {filterLabel}
          </a>
      )
    }
  }
}