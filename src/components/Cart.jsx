import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import './Cart.css'
function Cart () {
  const cartCheckId = useId()
  return (
    <>
      <label htmlFor={cartCheckId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='lapto' />
            <div>
              <strong>Laptop name</strong> - 1300€
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
          <li>
            <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='lapto' />
            <div>
              <strong>Laptop name</strong> - 1300€
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>

      </aside>
    </>
  )
}

export default Cart
