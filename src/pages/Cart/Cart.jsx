import React from "react";
import CardDetails from "./CardDetails.jsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import img from "../../assets/image 1.svg";

const Cart = () => {
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
            <CartItem img={img} name="Vermicelli Upma" price={300} />
            <CartItem img={img} name="Vermicelli Upma" price={300} />
            <CartItem img={img} name="Vermicelli Upma" price={300} />
            <CartItem img={img} name="Vermicelli Upma" price={300} />
          </div>
        </div>
        <CardDetails />
      </div>
    </div>
  );
};

export default Cart;
