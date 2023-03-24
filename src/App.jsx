import Header from './components/Header'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import useFilters from './hooks/useFilters'
import { Footer } from './components/Footer'
import { FilterContext } from './context/filter'
import Cart from './components/Cart'
import { CartContextProvider } from './context/cart'
function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)
  console.log(FilterContext)

  return (
    <>
      <Header />
      <CartContextProvider>
        <Cart />
        <Products products={filteredProducts} />
      </CartContextProvider>
      <Footer />
    </>
  )
}

export default App
