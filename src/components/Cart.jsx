import { useContext, useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { CartContext } from '../context/cart'
function Cart () {
  const { cart, setCart } = useContext(CartContext)
  const cartCheckId = useId()
  function handleClearCart () {
    if (cart.length === 0) return
    const uSure = window.confirm('Clear cart?')
    if (!uSure) return
    setCart([])
  }
  return (
    <>
      <label htmlFor={cartCheckId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckId} type='checkbox' hidden />
      <aside className='cart'>
        <ul className='cart-products'>
          {cart.length === 0
            ? (
              <p>No items in the cart</p>
              )
            : cart.map((product) => (

              <li key={product.id}>
                <img src={product.thumbnail} alt='lapto' />
                <div>
                  <strong>{product.title}</strong> - {product.price} €
                </div>
                <footer>
                  <small>Qty: {product.quantity}</small>
                  <button>+</button>
                </footer>
              </li>
            ))}

        </ul>
        <p>Total: {cart.reduce((acc, current) => acc + current.price * current.quantity, 0)}</p>
        <button onClick={handleClearCart}>
          <ClearCartIcon />
        </button>

      </aside>
    </>
  )
}

export default Cart
