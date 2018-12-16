import React from 'react';

import FilterLink from '../containers/filter-link';

export default function Footer({}) {
  return (
    <div>
      <p>
        Show:
        {'  '}
        <FilterLink filterType='all'>
            All
        </FilterLink>

        {'  '}
        <FilterLink filterType='active'>
            Active
        </FilterLink>

        {'  '}
        <FilterLink filterType='completed'>
            Completed
        </FilterLink>
      </p>
  </div>
  )
}