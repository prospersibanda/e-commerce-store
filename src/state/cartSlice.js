import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bagItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.bagItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.bagItems.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity++;
            state.totalAmount += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const existingItem = state.bagItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.bagItems = state.bagItems.filter(item => item.id !== action.payload.id);
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.bagItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity++;
                state.totalQuantity++;
                state.totalAmount += item.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.bagItems.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity--;
                state.totalQuantity--;
                state.totalAmount -= item.price;
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
