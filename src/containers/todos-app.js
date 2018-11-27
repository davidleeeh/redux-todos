import React from 'react';

import {addTodoAction, toggleTodoAction, setVisibilityFilter} from '../actions';

import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import Footer from '../components/footer';

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
        <AddTodo 
          onAddClick={(inputValue) => {
            store.dispatch(addTodoAction(++nextId, inputValue));
          }}
        />

        {/* Item List */}
        <TodoList 
          todos={this.applyVisibilityFilter(todos, activeFilter)}
          onTodoClick={(id) => {
            store.dispatch(toggleTodoAction(id));
          }}
        />

        {/* Filter Links */}
        <Footer
          activeFilter={activeFilter}
          onFilterClick={(filterType) => store.dispatch(setVisibilityFilter(filterType))}
        />
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
}