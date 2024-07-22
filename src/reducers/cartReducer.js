const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_ITEM": {
      const newItem = action.payload
      const existingItem = state.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      )

      if (existingItem) {
        return state.map((item) =>
          item.id === existingItem.id && item.size === existingItem.size
            ? {
                ...item,
                quantity: item.quantity + 1,
                orderId: Math.floor(Math.random() * 100),
              }
            : { ...item, orderId: Math.floor(Math.random() * 100) }
        )
      } else {
        return [
          ...state,
          { ...newItem, quantity: 1, orderId: Math.floor(Math.random() * 100) },
        ]
      }
    }
    case "MODIFY_QUANTITY": {
      const { itemId, newQuantity } = action.payload

      return state.map((item) =>
        item.orderId !== itemId ? item : { ...item, quantity: newQuantity }
      )
    }
    case "REMOVE_ITEM": {
      const orderId = action.payload.orderId
      return state.filter((item) => item.orderId !== orderId)
    }
    default:
      return state
  }
}

export const addItem = (item) => {
  return {
    type: "NEW_ITEM",
    payload: item,
  }
}

export const changeQuantity = (itemId, newQuantity) => {
  return {
    type: "MODIFY_QUANTITY",
    payload: { itemId, newQuantity },
  }
}

export const deleteItem = (orderId) => {
  return {
    type: "REMOVE_ITEM",
    payload: { orderId },
  }
}

export default cartReducer
