import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
interface CartItem {
  id: number;
  title?: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) || [] : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity , setCartItems } = cartSlice.actions;
export default cartSlice.reducer;


export function useLoadCartItems() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartItems = localStorage.getItem("cart");
      if (cartItems) {
        dispatch(setCartItems(JSON.parse(cartItems)));
      }
    }
  }, [dispatch]);
}