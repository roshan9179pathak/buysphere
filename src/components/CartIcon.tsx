import React from 'react'
import { useSelector } from 'react-redux';
import  {RootState}  from '../store/store'; 
import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = () => {

    const totalQuantity = useSelector((state: RootState) =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
      );

  return (
    <div className="relative">
      <FiShoppingCart size={24} />
      {totalQuantity > 0 && (
        <span className="absolute bottom-[-2px] right-[-8px] w-4 h-4 bg-red-500 text-white rounded-full text-[12px] flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </div>
  )
}

export default CartIcon
