import { createSlice } from '@reduxjs/toolkit';

// Define the initial state with default product data
const initialState = {
    items: [
        { id: 1, name: 'Apple Watch', description: 'Series 5 SE', price: 529.99, image: '/img/products/watch.png' },
        { id: 2, name: 'Sony ZX330BT', description: 'Light Grey', price: 39.99, image: '/img/products/headphones.png' },
        { id: 3, name: 'Iphone 11', description: 'Serious Black', price: 619.99, image: '/img/products/blackiphone11.png' },
        { id: 4, name: 'Iphone 11', description: 'Subway Blue', price: 619.99, image: '/img/products/blueiphone11.png' },
        { id: 5, name: 'Iphone 11', description: 'Product RED', price: 619.99, image: '/img/products/rediphone13.png' },
        { id: 6, name: 'Iphone 11', description: 'Milky White', price: 619.99, image: '/img/products/whiteiphone11.png' },
        { id: 7, name: 'Iphone 13', description: 'Product RED', price: 619.99, image: '/img/products/rediphone13.png' },
        { id: 8, name: 'Iphone 14', description: 'Product RED', price: 699.99, image: '/img/products/rediphone14.png' }
    ],
    totalQuantity: 0,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Add reducers here if needed
    },
});

export default productSlice.reducer;
