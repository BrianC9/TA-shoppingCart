
import { AddToCartIcon } from './Icons'
import './Products.css'
import { useCart } from '../hooks/useCart'
function Products ({ products }) {
  const { cart, addToCart } = useCart()
  console.log(cart)

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const { id, title, price, thumbnail } = product
          return (
            <li key={id}>
              <img src={thumbnail} alt={`${title} thumbnail`} />
              <h3>{title}</h3>
              <span>{price} €</span>

              <button onClick={() => addToCart(product)}><AddToCartIcon /></button>

            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
