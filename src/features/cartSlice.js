import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    cartTotal: 0
}

const totalPrice = (cart) => {
    const total = cart.reduce((total, item) => total + Number(item.subTotale), 0);
    return total.toFixed(2);
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            state.cartTotal = totalPrice(state.cart)
        },
        deleteToCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
            state.cartTotal = totalPrice(state.cart)
        },
        increaseQuantity: (state, action) => {
            state.cart = state.cart.map((product) => {
                const { quantity, id } = action.payload
                if (product.id === id) {
                    return {
                        ...product,
                        quantity,
                        subTotale: (product.price.current * quantity).toFixed(0)
                    }
                }
                return product
            })
            state.cartTotal = totalPrice(state.cart)
        }
    }
})

export const { addToCart, deleteToCart, increaseQuantity } = cartSlice.actions

export default cartSlice.reducer