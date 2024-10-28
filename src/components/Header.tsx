"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import CartIcon from "./CartIcon";
// import { useLoadCartItems } from "@/store/slices/cartSlice";
const Header = () => {



  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <Link href="/" className="btn btn-ghost text-xl">
            Buy-Sphere
          </Link>
          <Link href="/authentication/login" className="btn btn-ghost text-xl">
            <VscAccount />
          </Link>

          <Link href="/cart">
           <CartIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
