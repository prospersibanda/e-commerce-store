import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';  // This will handle product state

const store = configureStore({
  reducer: {
    products: productReducer,  // Add the product reducer here
  },
});

export default store;
