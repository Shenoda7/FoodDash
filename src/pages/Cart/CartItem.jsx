import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatUSD } from "../../util/formatter";
const CartItem = ({ dishData, img, setCart }) => {
  const [quantity, setQuantity] = useState(dishData.quantity);
  const addOrder = () => {
    setQuantity((order) => order + 1);
    setCart((cart) => {
      return cart.map((item) =>
        item.id === dishData.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };
  const removeOrder = () => {
    if (quantity > 1) {
      setQuantity((order) => order - 1);
      setCart((cart) => {
        return cart.map((item) =>
          item.id === dishData.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      });
    }

    if (quantity === 0) {
      setCart((cart) => {
        return cart.filter((item) => item.id !== dishData.id);
      });
    }
  };

  const removeFromCart = () => {
    setCart((cart) => {
      return cart.filter((item) => item.id !== dishData.id);
    });
  };
  return (
    <div
      className="flex justify-between items-center w-full sm:py-3 py-6 px-6 bg-white rounded-2xl
    shadow-lg flex-col sm:flex-row gap-3 sm:gap-0"
    >
      <img src={img} alt="" className="w-28 h-28 sm:w-20 sm:h-20" />
      <p className="text-body-md sm:text-body-sm font-semibold">
        {dishData.name}
      </p>
      <div className="flex items-center w-full sm:w-1/3 justify-around">
        <button
          className="bg-orange-dark rounded-full w-12 h-12 text-white text-body-lg"
          onClick={removeOrder}
        >
          -
        </button>
        <span className="text-body-lg font-semibold">{quantity}</span>
        <button
          className="bg-orange-dark rounded-full w-12 h-12 text-white text-body-lg"
          onClick={addOrder}
        >
          +
        </button>
      </div>
      <p className="text-body-lg font-medium">
        {formatUSD(dishData.price * quantity)}
      </p>
      <button onClick={removeFromCart}>
        <FaRegTrashAlt className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CartItem;
