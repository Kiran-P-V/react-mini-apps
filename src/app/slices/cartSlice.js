import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCartItem: (state, action) => {
      console.log(state.cart);
      console.log({ action });
      state.cart = state.cart.filter((item) => item?.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
