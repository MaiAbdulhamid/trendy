import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../[locale]/lib/axios";
import { showNotification } from "../[locale]/components/Notifications/showNotification";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as any,
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action){
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCartSuccess(state, action){
      state.totalQuantity++;
      state.changed = true;

      const newItem = action.payload;
      const existingItem = state.items.find((item : any ) => item.id === newItem.id);

      if(!existingItem){
        state.items.push({
          id: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
          price: newItem.price,
          name: newItem.title
        });
      }else{
        existingItem.quantity++;        
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

    },
    removeFromCart(state, action){
      state.totalQuantity--;
      state.changed = true;

      const id = action.payload;
      const existingItem = state.items.find((item : any) => item.id === id);
      if(existingItem.quantity === 1){
        state.items = state.items.filter((item : any) => item.id !== id)
      }else{
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});
export const cartActions = cartSlice.actions;

// Async action for adding to cart with variations
export const addToCart = (productId: number, variationId: number, quantity :string | number) => async (dispatch : any) => {
  try {
    // Make API request to add to cart
    const response = await axiosInstance.post('cart/AddOrUpdate', { product_id: productId, variation_id: variationId, qty: quantity });

    // Dispatch success action with response data
    dispatch(cartActions.addToCartSuccess(response.data));

    showNotification({
      type: "success",
      message: response.data.message,
    });

  } catch (error : any) {
    // Handle error
    showNotification({
      type: "danger",
      message: error.response.data.message,
    });
  }
};
export const selectCartItems = (state : any) => state.cart.items;

export default cartSlice.reducer;