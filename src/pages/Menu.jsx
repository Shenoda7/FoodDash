import React from "react";
import MenuProduct from "./../components/MenuProduct";
import dish1 from "../assets/image 1.svg";
const Menu = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-12 gap-y-10">
      <h2 className="font-bold text-heading-sm text-center">
        Our <span className="text-orange-mid">Best Popular</span>
        <br />
        Indian Dish
      </h2>
      <div className="flex items-center justify-around flex-wrap gap-y-24 w-full">
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
      </div>

      <h2 className="font-bold text-heading-md text-center pt-24">
        Our <span className="text-orange-mid"> Snacks</span> Menu
      </h2>
      <div className="flex items-center justify-around flex-wrap gap-y-24 w-full">
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
      </div>

      <h2 className="font-bold text-heading-md text-center pt-24">
        Our <span className="text-orange-mid"> Regular</span> Menu
      </h2>
      <div className="flex items-center justify-around flex-wrap xl:gap-x-32 gap-y-24 w-full">
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
        <MenuProduct
          img={dish1}
          name="Indian Vegetable Pulao"
          rating={3.0}
          numOfRating={55}
          price={200}
        />
      </div>
    </div>
  );
};

export default Menu;
