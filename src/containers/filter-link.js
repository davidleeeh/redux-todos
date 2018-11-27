import React from 'react';

import Link from '../components/link';

export default function FilterLink({
  children,
  filterType,
  selectedFilter,
  onClick
}) {
  return <Link
    isSelected={filterType === selectedFilter}
    onClick={() => onClick(filterType)}
    >
      {children}
    </Link>
}