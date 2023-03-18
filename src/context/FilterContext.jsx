import { createContext, useState } from 'react'

// 1. Create the context

export const FilterContext = createContext()

// 2. Provide the context

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({

    category: 'all',
    minPrice: 0

  })
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
