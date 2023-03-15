import { AddToCartIcon } from './Icons'
import './Products.css'
function Products ({ products }) {
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

              <button><AddToCartIcon /></button>

            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
