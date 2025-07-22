import { configureStore } from '@reduxjs/toolkit'
import wishListReducer from '../features/wishlistSlice'
import cartReducer from '../features/cartSlice'

const store = configureStore({
    reducer: {
        wishList: wishListReducer,
        cart: cartReducer
    }
})


export default store