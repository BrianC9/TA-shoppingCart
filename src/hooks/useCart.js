import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  const { cart, addToCart, removeFromCart, clearCart, modifyQuantity } = useContext(CartContext)
  if (cart === undefined) {
    throw new Error('useCart must be useed withing a CartContextProvider')
  }
  return { cart, addToCart, removeFromCart, clearCart, modifyQuantity }
}
