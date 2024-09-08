import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';  // This will handle product state
import cartReducer from './cartSlice'; 

const store = configureStore({
  reducer: {
    products: productReducer,  // Add the product reducer here
    cart: cartReducer, // Add the cart reducer to the store
  },
});

export default store;
