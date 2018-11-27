import React from 'react'

export default function AddTodo({
  onAddClick
}) 
{
  let input;
  return (
    <div>
       <h1>Todos App</h1>
        <input ref={
          (node) => {
            input = node;
          }}
        />
        <button onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }}>
          Add Todo
        </button>
    </div>
  )
};