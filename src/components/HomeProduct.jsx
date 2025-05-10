import React from "react";
import { Link } from "react-router-dom";

const HomeProduct = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <div
        className="border-dashed border-4 border-orange-mid w-max rounded-[9999px]
                  transition-all
                  hover:-translate-y-2
                  hover:shadow-xl
                  duration-300 ease-in-out"
      >
        <img src={img} alt="product" className="p-5 w-[250px] h-[250px]" />
      </div>
      <p className="text-center text-body-lg font-semibold">{name}</p>
      <Link
        to="/menu"
        className="font-medium text-body-lg text-orange-dark flex items-center justify-center gap-x-1 hover:gap-x-3
        transition-all duration-300 ease-in-out"
      >
        <span>Order Now</span>
        <span>{">"}</span>
      </Link>
    </div>
  );
};

export default HomeProduct;
