"use client";
import React from "react";
import CartComponent from "../../components/CartComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useLoadCartItems } from "@/store/slices/cartSlice";
const Page = () => {
  const products = useSelector((state: RootState) => state.cart.items);
  useLoadCartItems()

  return (
    <main>
      <CartComponent items={products} />
    </main>
  );
};

export default Page;
