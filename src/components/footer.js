import React from 'react';

import FilterLink from '../containers/filter-link';

export default function Footer({
  activeFilter,
  onFilterClick
}) {
  return (
    <div>
      <p>
        Show:
        {'  '}
        <FilterLink 
          filterType='SHOW_ALL' 
          selectedFilter={activeFilter}
          onClick={onFilterClick}>
            All
        </FilterLink>
        

        {'  '}
        <FilterLink 
          filterType='SHOW_ACTIVE' 
          selectedFilter={activeFilter}
          onClick={onFilterClick}>
            Active
        </FilterLink>

        {'  '}
        <FilterLink 
          filterType='SHOW_COMPLETED' 
          selectedFilter={activeFilter}
          onClick={onFilterClick}>
            Completed
        </FilterLink>
      </p>
  </div>
  )
}