import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct, addToCart, deleteProduct, increaseQuantity, decreaseQuantity } from "../../api/cartAPI";

export const getProductThunk = createAsyncThunk(
    '/cart-products',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("token")

            const response = await getProduct(token);
            return response.data
        } catch (error) {
            const message =
                error.response?.data?.message || error.message || 'Product not found!';
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const addProductThunk = createAsyncThunk(
    ('/cart'),
    async ({ prod, token }, thunkAPI) => {

        try {
            const response = await addToCart(prod, token)
            return response.data
        } catch (error) {
            const message = error.response?.data?.message || error.message || 'Something wrong please try again!'
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteProductThunk = createAsyncThunk(
    ('/cart/delete'),
    async (productId, thunkAPI) => {
        const token = localStorage.getItem("token")

        try {
            const response = await deleteProduct(productId, token);
            return { productId, data: response.data };
        } catch (error) {
            const message = error.response?.data?.message || error.message || 'Something wrong please try again!'
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const inscreasQuantityThunk = createAsyncThunk(
    ('/cart/quantity'), async (id, thunkAPI) => {
        const token = localStorage.getItem("token")

        try {
            const response = await increaseQuantity(id, token);
            return response.data
        }
        catch (error) {
            const message = error.response?.data?.message || error.message || 'Something wrong '
            return thunkAPI.rejectWithValue(message)
        }
    })

export const decreaseQuantityThunk = createAsyncThunk(
    ('/cart/decrease'), async (id, thunkAPI) => {
        try {
            const token = localStorage.getItem("token")
            const response = await decreaseQuantity(id, token);
            return response.data
        } catch (error) {
            const message = error.response?.data?.message || error.message || 'Something wrong'
            return thunkAPI.rejectWithValue(message)
        }
    }
        
)