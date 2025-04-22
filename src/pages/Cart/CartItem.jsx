import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({ img, name, price }) => {
  const [quantity, setQuantity] = useState(1);
  const addOrder = () => {
    setQuantity((order) => order + 1);
  };
  const removeOrder = () => {
    if (quantity > 0) {
      setQuantity((order) => order - 1);
    }
  };
  return (
    <div
      className="flex justify-between items-center w-full sm:py-3 py-6 px-6 bg-white rounded-2xl
    shadow-lg flex-col sm:flex-row gap-3 sm:gap-0"
    >
      <img src={img} alt="" className="w-28 h-28 sm:w-20 sm:h-20" />
      <p className="text-body-md sm:text-body-sm font-semibold">{name}</p>
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
      <p className="text-body-lg font-medium">₹{price * quantity}</p>
      <button>
        <FaRegTrashAlt className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CartItem;
