import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],      // Array of { product, quantity }
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.product.name === product.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeFromCart(state, action) {
      const productName = action.payload;
      const existingItem = state.items.find((item) => item.product.name === productName);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.product.name !== productName);
      }
    },
    incrementQuantity(state, action) {
      const productName = action.payload;
      const existingItem = state.items.find((item) => item.product.name === productName);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const productName = action.payload;
      const existingItem = state.items.find((item) => item.product.name === productName);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.product.name !== productName);
        } else {
          existingItem.quantity -= 1;
        }
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
