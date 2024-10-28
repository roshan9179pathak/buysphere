"use client";
import React, { useEffect } from "react";
import CartComponent from "@/components/CartComponent";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useLoadCartItems } from "@/store/slices/cartSlice";
const Page = () => {

  
    useLoadCartItems()


  const products = useSelector((state: RootState) => state.cart.items);

  return (
    <main>
      <CartComponent items={products} />
    </main>
  );
};

export default Page;
