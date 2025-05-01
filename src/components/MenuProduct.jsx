import { Rating } from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

const MenuProduct = ({ img, dishData, setCart }) => {
  const [numOfOrders, setNumOfOrders] = React.useState(0);

  const addOrder = () => {
    setNumOfOrders((order) => order + 1);
  };

  const removeOrder = () => {
    if (numOfOrders > 0) {
      setNumOfOrders((order) => order - 1);
    }
  };

  const addToCart = () => {
    if (numOfOrders > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item Added to Cart",
        showConfirmButton: false,
        timer: 1200,
      });
      setCart((cart) => {
        const existingItem = cart.find((item) => item.id === dishData.id);
        if (existingItem) {
          return cart.map((item) =>
            item.id === dishData.id
              ? { ...item, quantity: item.quantity + numOfOrders }
              : item
          );
        }
        return [...cart, { ...dishData, quantity: numOfOrders }];
      });
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center
    gap-5 py-5 px-4 bg-orange-light
    border-dashed border-4 border-orange-mid rounded-b-[2000px] rounded-t-full
    transition-all
    hover:-translate-y-2
    hover:shadow-xl
    duration-300 ease-in-out"
    >
      <img src={img} alt="product" className="w-[250px] h-[250px]" />
      <p className="text-body-lg font-bold w-3/4 text-center">
        {dishData.name}
      </p>
      <div className="flex justify-center items-center gap-1">
        <Rating
          name="half-rating-read"
          defaultValue={dishData.rating}
          precision={0.25}
          readOnly
        />
        <p className="text-grey-dark text-body-lg">({dishData.numOfRating})</p>
      </div>
      <p className="text-heading-sm">${dishData.price}</p>
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
      <button
        className="px-9 py-4 bg-orange-dark rounded-full font-semibold text-white cursor-pointer
      hover:bg-transparent hover:text-orange-dark hover:ring-inset hover:ring-2 hover:ring-orange-dark
      transition-all duration-300 ease-in-out"
        onClick={addToCart}
      >
        ADD TO CART
      </button>
      {/* <button
        onClick={() => navigate("/cart")}
        className="px-9 py-4 bg-orange-dark rounded-full font-semibold text-white cursor-pointer"
      >
        Cart Details
      </button> */}
    </div>
  );
};

export default MenuProduct;
