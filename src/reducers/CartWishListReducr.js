export const wishlistOrCartInitialState = {
  wishlist: [],
  cart: []
};

export const wishCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find(product => product.id === action.payload.id)) {

        return state;
      }
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          { ...action.payload, inWishList: true }
        ]
      }
    case 'DELETE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(product => product.id !== action.payload.id)
      }

    case 'ADD_TO_CART':
      if (state.cart.find(product => product.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, inCart: true, totalPrice: action.payload.price.current.toFixed(1) }]
      }

    case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id)
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product.id === action.payload.id) {
            const newQuantity = action.payload.quantity
            return { ...product, quantity: newQuantity, totalPrice: (newQuantity * product.price.current).toFixed(1) };
          }
          return product;
        })
      };

  }
}