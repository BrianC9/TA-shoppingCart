import './Header.css'
import React, { useId } from 'react'
import useFilters from '../hooks/useFilters'

function Filters () {
  const { filters, setFilters } = useFilters()

  const priceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangePrice = (e) => {
    setFilters(prevState => ({ ...prevState, minPrice: e.target.value }))
  }
  const handleChangeCategory = (e) => {
    setFilters(prevState => ({ ...prevState, category: e.target.value }))
  }
  return (
    <section className='filters'>
      <div className='price-filter'>
        <label htmlFor={priceFilterId}>Price from</label>
        <input id={priceFilterId} type='range' min={0} value={filters.minPrice} max={1000} onChange={handleChangePrice} />
        <span>{filters.minPrice}€</span>
      </div>
      <div className='category-filter'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} value={filters.category} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
