// addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Prosper',
  street: 'aew',
  city: 'Johannesburg',
  state: 'Gauteng',
  country: 'SA',
  saveAsDefault: false,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      return { ...state, ...action.payload };
    },
    toggleSaveAsDefault: (state) => {
      state.saveAsDefault = !state.saveAsDefault;
    },
  },
});

export const { setAddress, toggleSaveAsDefault } = addressSlice.actions;
export default addressSlice.reducer;
