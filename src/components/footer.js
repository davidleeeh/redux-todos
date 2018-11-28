import React from 'react';

import FilterLink from '../containers/filter-link';

export default function Footer({}) {
  return (
    <div>
      <p>
        Show:
        {'  '}
        <FilterLink filterType='SHOW_ALL'>
            All
        </FilterLink>

        {'  '}
        <FilterLink filterType='SHOW_ACTIVE'>
            Active
        </FilterLink>

        {'  '}
        <FilterLink filterType='SHOW_COMPLETED'>
            Completed
        </FilterLink>
      </p>
  </div>
  )
}