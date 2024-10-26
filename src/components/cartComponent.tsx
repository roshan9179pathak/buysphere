import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveItem, onUpdateQuantity }) => {
  const handleIncreaseQuantity = (id: number, currentQuantity: number) => {
    onUpdateQuantity(id, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      onUpdateQuantity(id, currentQuantity - 1);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6" style={{ backgroundColor: '#1d232a' }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#a6adbb' }}>
        Your Cart
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between p-4 border rounded" style={{ backgroundColor: '#2c323a', borderColor: '#4a4e55' }}>
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold" style={{ color: '#a6adbb' }}>{item.name}</h3>
                <p className="text-sm" style={{ color: '#a6adbb' }}>Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                className="px-2 py-1 bg-gray-500 rounded text-white"
              >
                -
              </button>
              <span className="mx-2 text-lg" style={{ color: '#a6adbb' }}>{item.quantity}</span>
              <button
                onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                className="px-2 py-1 bg-gray-500 rounded text-white"
              >
                +
              </button>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="ml-4 px-2 py-1 bg-red-600 text-white rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <p className="text-lg font-bold" style={{ color: '#a6adbb' }}>
          Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
