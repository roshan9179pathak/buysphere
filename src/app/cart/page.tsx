'use client'
import React from 'react'
import CartComponent from '../../components/CartComponent'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
const Page = () => {

    const products = useSelector((state:RootState) => state.cart.items)
    console.log(products);
    

  return (
    <main>
      <CartComponent items={products}  />
    </main>
  )
}

export default Page
