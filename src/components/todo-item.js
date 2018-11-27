import React from 'react';

export default function TodoItem({
  desc,
  completed,
  onClick
}) 
{
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      onClick={onClick}
    >
      {desc}
    </li>
  )
};