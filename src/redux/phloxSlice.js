import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  selectedProduct: null,
  userInfo: null,
};

export const phloxSlice = createSlice({
  name: "phlox",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.quantity;
        console.log(item.quantity);
        // item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    resetCart: (state) => {
      state.cart = [];
    },

    increamentQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },

    decreamentQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  setSelectedProduct,
  deleteItem,
  resetCart,
  increamentQuantity,
  decreamentQuantity,
  addUser,
  removeUser,
} = phloxSlice.actions;
export default phloxSlice.reducer;
