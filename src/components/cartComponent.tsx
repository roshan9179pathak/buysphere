import React from "react";
import Button from "./Buttons";
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";
interface CartItems {
  id: number;
  title?: string;
  image?: string;
  quantity: number;
  price: number;
}

interface CartComponentProps {
  items: CartItems[];
}

const CartComponent: React.FC<CartComponentProps> = ({ items }) => {
  const dispatch = useDispatch();

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item?.price * item.quantity,
    0
  );

  const handleDelete = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={`Item ${item.id}`}
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <div className="flex flex-col">
                <div className="flex">
                  <span className="font-semibold">
                    Quantity:
                    <span className="font-semibold mx-2">{item.quantity}</span>
                  </span>
                </div>

                <span className="text-sm">Price: ${item.price.toFixed(2)}</span>
              </div>
            </div>
            <div>
              <FaTrash
                onClick={() => handleDelete(item.id)}
                style={{ color: "red", fontSize: "15px" }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between font-bold">
        <div>
          Total Quantity: <span>{totalQuantity}</span>
        </div>
        <div>
          Total Price: <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-4">
        <Button
          type="button"
          onClick={() => {
            alert(`Product is successfully Purchased`);
          }}
        >
          Proceed to Payments
        </Button>
      </div>
    </div>
  );
};

export default CartComponent;
