import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import useFilters from './hooks/useFilter'
import { Footer } from './components/Footer'
import { FilterContext } from './context/FilterContext'
function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters, filters } = useFilters()

  const filteredProducts = filterProducts(products)
  console.log(FilterContext)

  return (
    <div>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <Header />
        <Products products={filteredProducts} />
        <Footer />
      </FilterContext.Provider>
    </div>
  )
}

export default App
