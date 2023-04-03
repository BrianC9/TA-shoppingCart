export const INITIAL_CART_STATE = []

export const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  DELETE_FORM_CART: 'DELETE_FORM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.ADD_TO_CART:{
      const productInCartIndex = state.findIndex(item => item.id === payload.id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      } else {
        return [...state, { ...payload, quantity: 1 }]
      } }

    case ACTION_TYPES.DELETE_FORM_CART:
      return state.filter((itemCart) => itemCart.id !== payload.id)
    case ACTION_TYPES.CLEAR_CART:{
      return INITIAL_CART_STATE }
  }
  return state
}
