import { createSlice } from "@reduxjs/toolkit";
 
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.items.find(
        (product) => product.id === newProduct.id
      );
      state.totalQuantity++;
      if (!existingProduct) {
        state.items.push({
          name: newProduct.title,
          id: newProduct.id,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice += newProduct.price;
      }
    },
    removeItemFromCart(state, action) {
      const existingProduct = state.items.find(
        (product) => product.id === action.payload
      );
      state.totalQuantity--;
      if (existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice -= existingProduct.price;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
