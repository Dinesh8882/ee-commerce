import { configureStore } from '@reduxjs/toolkit'
import wishListReducer from '../features/wishlistSlice'
import authReducer from '../features/auth/authSlice'

import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
    reducer: {
        wishList: wishListReducer,
        cart: cartReducer,
        auth: authReducer,
    }
})


export default store