import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishList: []
}

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            state.wishList.push(action.payload)
        },
        deleteToWishList: (state, action) => {
            state.wishList = state.wishList.filter((product) => product.id !== action.payload)
        }
    }

})

export const { addToWishList, deleteToWishList } = wishListSlice.actions

export default wishListSlice.reducer