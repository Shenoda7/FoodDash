import { Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const MenuProduct = ({ img, name, rating, numOfRating, price }) => {
  const [numOfOrders, setNumOfOrders] = React.useState(0);
  const navigate = useNavigate();

  const addOrder = () => {
    setNumOfOrders((order) => order + 1);
  };
  const removeOrder = () => {
    if (numOfOrders > 0) {
      setNumOfOrders((order) => order - 1);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center
    gap-5 py-5 px-4 bg-orange-light
    border-dashed border-4 border-orange-mid rounded-b-[2000px] rounded-t-full
    transition-all
    hover:scale-[1.03]
    hover:shadow-xl
    duration-300 ease-in-out"
    >
      <img src={img} alt="product" className="w-[250px] h-[250px]" />
      <p className="text-body-lg font-bold w-3/4 text-center">{name}</p>
      <div className="flex justify-center items-center gap-1">
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.25}
          readOnly
        />
        <p className="text-grey-dark text-body-lg">({numOfRating})</p>
      </div>
      <p className="text-heading-sm">₹{price}</p>
      <div className="flex items-center justify-center  gap-9 text-body-lg">
        <button
          className="bg-orange-dark rounded-full w-12 h-12 text-white"
          onClick={removeOrder}
        >
          -
        </button>
        <span className="text-body-lg font-semibold">{numOfOrders}</span>
        <button
          className="bg-orange-dark rounded-full w-12 h-12 text-white"
          onClick={addOrder}
        >
          +
        </button>
      </div>
      <button className="px-9 py-4 bg-orange-dark rounded-full font-semibold text-white cursor-pointer">
        ADD TO CART
      </button>
      <button
        onClick={() => navigate("/cart")}
        className="px-9 py-4 bg-orange-dark rounded-full font-semibold text-white cursor-pointer"
      >
        Cart Details
      </button>
    </div>
  );
};

export default MenuProduct;
