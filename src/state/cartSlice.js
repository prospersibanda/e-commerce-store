import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Dell XPS 13',
      color: 'White',
      description: 'Lorem ipsum dolor sit amet...',
      price: 1799.99,
      quantity: 1,
      rating: 4.5,
      image: '/img/products/laptop.png',
    },
  ], // Cart items will be stored here
  totalQuantity: 1,
  totalPrice: 1799.99, // Calculated based on the initial item
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // Item exists, increase quantity
        state.items[itemIndex].quantity += 1;
      } else {
        // Item doesn't exist, add it with a quantity of 1
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }

      // Update total price and quantity
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      
      if (itemIndex >= 0) {
        const itemToRemove = state.items[itemIndex];

        // Update total quantity and price before removing
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;

        // Remove item from cart
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },

    increaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;

        // Update total price and quantity
        state.totalQuantity += 1;
        state.totalPrice += state.items[itemIndex].price;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;

        // Update total price and quantity
        state.totalQuantity -= 1;
        state.totalPrice -= state.items[itemIndex].price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
