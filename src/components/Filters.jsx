import './Header.css'
import React, { useId, useState } from 'react'

function Filters ({ handleChangeFilters }) {
  const [price, setPrice] = useState()
  const [category, setCategory] = useState('all')
  const priceFilterId = useId()
  const categoryFilterId = useId()
  const handleChangePrice = (e) => {
    setPrice(e.target.value)
    handleChangeFilters(prevState => ({ ...prevState, minPrice: e.target.value }))
  }
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)

    handleChangeFilters(prevState => ({ ...prevState, category: e.target.value }))
  }
  return (
    <section className='filters'>
      <div className='price-filter'>
        <label htmlFor={priceFilterId}>Price from</label>
        <input id={priceFilterId} type='range' min={0} value={price} max={1500} onChange={handleChangePrice} />
        <span>{price}€</span>
      </div>
      <div className='category-filter'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} value={category} onChange={handleChangeCategory}>
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
