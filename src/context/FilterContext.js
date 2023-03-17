import { createContext } from 'react'

export const FilterContext = createContext(
  {
    filters: {

      category: 'all',
      minPrice: 0

    },
    setFilters: () => {}
  }
)
