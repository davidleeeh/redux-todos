import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import TodoItem from './todo-item';
import { toggleTodoAction } from '../actions';
import { getVisibleTodos } from '../reducers';
import * as actions from '../actions';

class TodoList extends React.Component{
  componentDidMount () {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const {todos, onTodoClick} = this.props;
    console.log(`Render() `, todos);

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
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter: filter
  };  
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodoAction(id));
    },

    fetchTodos: (filter) => {
      dispatch(actions.fetchTodos(filter));
    }
  };
}

// withRouter gives to the wrapped component match, location and history props
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));