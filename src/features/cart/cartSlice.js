import { createSlice, current } from '@reduxjs/toolkit';
import { getProductThunk, addProductThunk, deleteProductThunk, inscreasQuantityThunk, decreaseQuantityThunk } from './cartThunk';

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  loading: false,
  error: null
};

// Helper function to calculate total price
const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => Math.floor(total + Number(item.subTotale || 0)), 0);
};

// Helper function to calculate total quantity
const calculateTotalQuantity = (cart) => {
  return cart.reduce((total, item) => total + Number(item.quantity || 0), 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const existing = state.cart.find((p) => p._id === action.payload._id);
      if (existing) {
        existing.quantity += action.payload.quantity || 1;
        existing.subTotale = existing.quantity * existing.price.current;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
          subTotale: action.payload.price.current * (action.payload.quantity || 1),
        });
      }
      state.totalPrice = calculateTotalPrice(state.cart);
      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
    deleteToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.cart);
      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p._id === action.payload);
      if (item) {
        item.quantity += 1;
        item.subTotale = Math.floor(+(item.quantity * item.price.current));
      }
      state.totalPrice = calculateTotalPrice(state.cart)
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.subTotale = Math.floor(+(item.subTotale - item.price.current));
      }
      state.totalPrice = calculateTotalPrice(state.cart)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = Array.isArray(action.payload.cart) ? action.payload.cart : action.payload.cart || [];
        state.totalPrice = calculateTotalPrice(state.cart);
        state.totalQuantity = calculateTotalQuantity(state.cart);
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(addProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cart.push(action.payload.cart);
        state.totalPrice = calculateTotalPrice(state.cart);
        state.totalQuantity = calculateTotalQuantity(state.cart);
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(deleteProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload.productId
        );
        const deletedProduct = state.cart.find(
          (product) => product._id === action.payload.productId
        );

        if (deletedProduct) {
          state.totalPrice = +(state.totalPrice - deletedProduct.current).toFixed(2);
        }
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(inscreasQuantityThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(inscreasQuantityThunk.fulfilled, (state, action) => {
        state.loading = false
        const { id } = action.payload;

        state.cart = state.cart.map((product) => {
          if (product._id === id) {
            const updatedProduct = {
              ...product,
              subTotal: (product.price.current * quantity).toFixed(2),
            };
            return updatedProduct;
          }
          return product;
        })

      })
      .addCase(inscreasQuantityThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(decreaseQuantityThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(decreaseQuantityThunk.fulfilled, (state, action) => {
        state.loading = false
        state.cart = state.cart.map((item) => {
          if (item._id === action.payload) {
            const updatedProduct = {
              ...item,
              subTotal: +(item.subTotal - item.price.current).toFixed(2)
            }
            return updatedProduct
          }
          return item
        })

      })
      .addCase(decreaseQuantityThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

  }
});

export const { addToCart, deleteToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
