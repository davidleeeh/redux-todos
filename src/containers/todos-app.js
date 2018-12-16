import React from 'react';
import { connect } from 'react-redux';

import {addTodoAction, toggleTodoAction} from '../actions';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import Footer from '../components/footer';

class TodosApp extends React.Component {
  render() {
    const {todos, visibilityFilter, dispatch} = this.props;
    const activeFilter = visibilityFilter || 'all';

    return (
      <div>
        {/* Input Bar */}
        <AddTodo 
          onAddClick={(inputValue) => {
            dispatch(addTodoAction(inputValue));
          }}
        />

        {/* Item List */}
        <TodoList 
          todos={this.applyVisibilityFilter(todos, activeFilter)}
          onTodoClick={(id) => {
            dispatch(toggleTodoAction(id));
          }}
        />

        {/* Filter Links */}
        <Footer />
      </div>
    );
  }

  applyVisibilityFilter(todos, filter) {
    switch (filter) {
      case 'active':
        return todos.filter((t) => {
          return !t.completed;
        });

      case 'completed':
        return todos.filter((t) => {
          return t.completed;
        });

      default:
        return todos;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    visibilityFilter: ownProps.match.params.filter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);
