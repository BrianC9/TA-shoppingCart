import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { AddToCartIcon } from './Icons'
import './Products.css'
function Products ({ products }) {
  const { cart, setCart } = useContext(CartContext)
  console.log(cart)
  const handleAddToCart = (productToAdd) => {
    if (cart.some(product => product.id === productToAdd.id)) {
      const updatedCart = cart.map(product => {
        if (product.id === productToAdd.id) {
          product.quantity += 1
        }
        return product
      })
      setCart(updatedCart)
    } else {
      setCart(prevState => [...prevState, { ...productToAdd, quantity: 1 }])
    }
  }
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

              <button onClick={() => handleAddToCart(product)}><AddToCartIcon /></button>

            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
