import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

const updateTotals = (state) => {
  state.totalPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  state.totalItems = state.cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      updateTotals(state);
    },
    incrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id
          ? {
              ...cartItem,
              quantity: (cartItem.quantity || 1) + 1,
              totalPrice: cartItem.price * ((cartItem.quantity || 1) + 1),
            }
          : cartItem
      );
      updateTotals(state);
    },
    decrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id
          ? {
              ...cartItem,
              quantity: (cartItem.quantity || 1) - 1,
              totalPrice: cartItem.price * ((cartItem.quantity || 1) - 1),
            }
          : cartItem
      );
      updateTotals(state);
    },
    deleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      updateTotals(state);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
