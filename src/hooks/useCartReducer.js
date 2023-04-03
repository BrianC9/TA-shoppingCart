import { useReducer } from 'react'
import { ACTION_TYPES, cartReducer, INITIAL_CART_STATE } from '../reducers/cartReducer'

export const useCartReducer = () => {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE)
  const addToCart = (product) => dispatch({
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product
  })
  const removeFromCart = product => dispatch({
    type: ACTION_TYPES.DELETE_FORM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: ACTION_TYPES.CLEAR_CART
  })
  return { cart, addToCart, removeFromCart, clearCart }
}
