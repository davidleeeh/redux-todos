import React from 'react';

export default function Link({
  children,
  isSelected,
  onClick
}) {
  if (isSelected) {
    return <span>{children}</span> 
  } else {
    return (
      <a href="#"
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          {children}
      </a>
    )
  }
}