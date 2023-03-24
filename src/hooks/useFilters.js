import { useContext } from 'react'
import { FilterContext } from '../context/filter'
export default function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  function filterProducts (products) {
    return products.filter(product => {
      return (
        (product.price >= filters.minPrice) && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filterProducts, setFilters, filters }
}
