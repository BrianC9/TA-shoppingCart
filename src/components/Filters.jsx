import './Header.css'
import React, { useState } from 'react'

function Filters () {
  const [price, setPrice] = useState()
  const [category, setCategory] = useState('all')
  return (
    <section className='filters'>
      <div className='price-filter'>
        <label htmlFor='price'>Price</label>
        <input id='price' type='range' min={0} value={price} max={1500} onChange={(e) => { setPrice(e.target.value) }} />
        <span>{price}€</span>
      </div>
      <div className='category-filter'>
        <label htmlFor='category'>Category</label>
        <select id='category' value={category} onChange={e => setCategory(e.target.value)}>
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
