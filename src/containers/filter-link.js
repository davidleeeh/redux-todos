import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({
  filterType,
  children
}) => {
  let path = `/${filterType}`;
  return (
    <NavLink 
      to={path} 
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}>
      {children}
    </NavLink>
  )
}

export default FilterLink;