import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find(
        (i) => i.cartId === product.cartId
      );
      if(item) {
        // Item already exists in the cart, update the amount
        item.amount += product.amount;
        toast.info(`${product.title} amount updated in cart`);
      } else {
        // Item does not exist, add it to the cart
        state.cartItems.push(product);
        toast.success(`${product.title} added to cart`);
      } 
      state.numItemsInCart+= product.amount;
      state.cartTotal+= product.price * product.amount;
      state.tax=0.1 *state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("item added to cart");
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
