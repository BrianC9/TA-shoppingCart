import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  function filterProducts (products) {
    return products.filter(product => {
      return (
        (product.price >= filters.minPrice) && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filterProducts, setFilters }
}

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)
  console.log(filterProducts)

  return (
    <div>
      <Header handleChangeFilters={setFilters} />
      <Products products={filteredProducts} />
    </div>
  )
}

export default App
