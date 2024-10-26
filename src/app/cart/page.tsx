"use client";
import React from "react";
import Cart from "@/components/cartComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { removeFromCart, updateQuantity } from "../../store/slices/cartSlice";
const page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  return (
    <main>
      <Cart
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </main>
  );
};

export default page;
