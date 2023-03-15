import { useState } from 'react'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  function filterProducts (products) {
    return products.fitler(product => {
      return (
        (product.price >= filters.minPrice) && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return (
    <div className='App'>
      <h1>Shopping Cart 🛒</h1>
      <Products products={products} />
    </div>
  )
}

export default App
