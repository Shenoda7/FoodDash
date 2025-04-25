import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails.jsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import img from "../../assets/image 1.svg";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((dishData) => {
      total += dishData.price * dishData.quantity;
    });
    setTotal(total);
  };
  useEffect(() => {
    calculateTotal();
  }, [cart]);
  return (
    <div className="bg-orange-light">
      <div
        className="container flex gap-24 xl:gap-0 xl:justify-between 
      items-center xl:items-start py-24 flex-col xl:flex-row "
      >
        <div className="flex flex-col items-start w-11/12 xl:w-1/2 gap-y-11">
          <div className="flex border-b-[6px] py-5 border-dashed border-orange-dark w-full">
            <Link to={"/menu"}>
              <MdKeyboardArrowLeft className="w-[30px] h-[30px]" />
            </Link>
            <h2 className="font-semibold text-body-md">Shopping Continue</h2>
          </div>

          <h3 className="text-body-md font-medium">Shopping Item</h3>
          <div className="flex flex-col gap-y-6 w-full">
            {cart.map((dishData) => {
              return (
                <CartItem
                  key={dishData.id}
                  img={img}
                  dishData={dishData}
                  setCart={setCart}
                />
              );
            })}
          </div>
        </div>
        <CardDetails total={total} />
      </div>
    </div>
  );
};

export default Cart;
