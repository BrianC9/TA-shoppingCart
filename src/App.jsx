import Header from './components/Header'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import useFilters from './hooks/useFilters'
import { Footer } from './components/Footer'
import { FilterContext } from './context/FilterContext'
function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)
  console.log(FilterContext)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
