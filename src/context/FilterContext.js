import { createContext } from 'react'

export const FilterContext = createContext(
  {
    category: 'all',
    minPrice: 0
  }
)
