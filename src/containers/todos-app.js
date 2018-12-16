import React from 'react';
import { connect } from 'react-redux';

import {addTodoAction} from '../actions';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import Footer from '../components/footer';

class TodosApp extends React.Component {
  render() {
    const {dispatch} = this.props;

    return (
      <div>
        {/* Input Bar */}
        <AddTodo 
          onAddClick={(inputValue) => {
            dispatch(addTodoAction(inputValue));
          }}
        />

        {/* Item List */}
        <TodoList />

        {/* Filter Links */}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  };
}

export default connect(null, mapDispatchToProps)(TodosApp);
