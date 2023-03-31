import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'
function Cart () {
  const { cart, clearCart, addToCart, removeFromCart } = useCart()
  const cartCheckId = useId()

  return (
    <>
      <label htmlFor={cartCheckId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckId} type='checkbox' hidden />
      <aside className='cart'>
        {cart.length === 0
          ? (
            <p className='cart-empty'>No items in the cart</p>
            )
          : (
            <ul className='cart-products'>
              {cart.map((product) => (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div>
                    <strong>{product.title}</strong> - {product.price} €
                  </div>
                  <footer>
                    <button onClick={() => removeFromCart(product)}><RemoveFromCartIcon /></button>
                    <small>Qty: {product.quantity}</small>
                    <button onClick={() => addToCart(product)}>+</button>
                  </footer>
                </li>
              ))}
            </ul>
            )}
        <p>
          Total:{' '}
          {cart.reduce(
            (acc, current) => acc + current.price * current.quantity,
            0
          )} €
        </p>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
