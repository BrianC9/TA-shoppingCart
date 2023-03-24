import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {}
  const removeFromCart = product => {}
  const clearCart = () => {
    if (cart.length === 0) return
    const uSure = window.confirm('Clear cart?')
    if (!uSure) return
    setCart([])
  }
  const modifyQuantity = product => {}
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, modifyQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
