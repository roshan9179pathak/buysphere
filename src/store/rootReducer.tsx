import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice'
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

export default rootReducer;
