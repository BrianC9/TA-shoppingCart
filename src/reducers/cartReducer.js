export const INITIAL_CART_STATE = []

const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  DELETE_FORM_CART: 'DELETE_FORM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const carReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.ADD_TO_CART:
      if (state.some((product) => product.id === payload.id)) {
        const updatedCart = state.map((product) => {
          if (product.id === payload.id) {
            product.quantity += 1
          }
          return product
        })
        return updatedCart
      } else {
        return [...state, { ...action.payload, quantity: 1 }]
      }
    case ACTION_TYPES.DELETE_FORM_CART:
      return state.filter((itemCart) => itemCart.id !== payload.id)
    case ACTION_TYPES.CLEAR_CART:{
      if (state.length === 0) return

      const uSure = window.confirm('Clear cart?')

      if (!uSure) return
      return INITIAL_CART_STATE }
    default: {
      throw Error('Unknown action: ' + type)
    }
  }
}
