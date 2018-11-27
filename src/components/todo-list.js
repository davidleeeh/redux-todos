import React from 'react';

import TodoItem from './todo-item';

export default function TodoList ({
  todos,
  onTodoClick
}) {
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