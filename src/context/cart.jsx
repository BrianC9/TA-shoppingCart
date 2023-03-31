import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (productToAdd) => {
    if (cart.some((product) => product.id === productToAdd.id)) {
      const updatedCart = cart.map((product) => {
        if (product.id === productToAdd.id) {
          product.quantity += 1
        }
        return product
      })
      setCart(updatedCart)
    } else {
      setCart((prevState) => [...prevState, { ...productToAdd, quantity: 1 }])
    }
  }

  const removeFromCart = (productToRemove) => {
    setCart(prevState => prevState.filter(itemCart => itemCart.id !== productToRemove.id))
  }

  const clearCart = () => {
    if (cart.length === 0) return
    const uSure = window.confirm('Clear cart?')
    if (!uSure) return
    setCart([])
  }
  const modifyQuantity = (product) => {}
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, modifyQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
