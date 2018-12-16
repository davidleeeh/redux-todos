import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import TodoItem from './todo-item';
import { toggleTodoAction } from '../actions';
import { getVisibleTodos } from '../reducers';

const TodoList = ({
  todos,
  onTodoClick
}) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onClick={() => {
                onTodoClick(todo.id);
              }}
            />  
          );
        })
      }
    </ul>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state, ownProps.match.params.filter || 'all')
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodoAction(id));
    }
  }
}

// withRouter gives to the wrapped component match, location and history props
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));