import React, { useState } from "react";
import MenuProduct from "./../components/MenuProduct";
import dish1 from "../assets/image 1.svg";
import pattern from "../assets/food-pattern.png";
const Menu = ({ menu, setCart }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [type, setType] = useState("all");
  function showDishes(menuType) {
    const dishes = menu[menuType]
      .filter(
        (dishData) => dishData.price >= minPrice && dishData.price <= maxPrice
      )
      .map((dishData) => {
        return (
          <MenuProduct
            key={dishData.id}
            img={dish1}
            dishData={dishData}
            setCart={setCart}
          />
        );
      });
    return dishes.length ? (
      dishes
    ) : (
      <div
        role="alert"
        className="alert bg-orange-dark text-white text-body-lg w-1/2 min-w-64"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-10 w-10 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>No {menuType} dishes available in this price range</span>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
      }}
      className="bg-orange-light"
    >
      <div
        className="container flex flex-col items-center justify-center py-12 gap-y-10
      "
      >
        <div className="flex flex-col md:flex-row items-center gap-6 bg-orange-mid rounded-lg p-4 shadow-md">
          <div className="flex items-center justify-center gap-x-2">
            <label className="font-semibold text-body-md text-white">
              Min Price:
            </label>
            <input
              type="number"
              min={0}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              onBlur={(e) => setMinPrice(e.target.value ? e.target.value : 0)}
              className="w-24 px-3 py-2 border  font-semibold text-body-md border-orange-light rounded-md focus:outline-none focus:ring-2 focus:ring-orange-mid"
            />
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <label className="font-semibold text-body-md text-white">
              Max Price:
            </label>
            <input
              type="number"
              min={minPrice}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onBlur={(e) => setMaxPrice(e.target.value ? e.target.value : 100)}
              className="w-24 px-3 py-2 border font-semibold text-body-md border-orange-light rounded-md focus:outline-none focus:ring-2 focus:ring-orange-mid"
            />
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <label className="font-semibold text-body-md text-white">
              Type:
            </label>
            <select
              className=" px-3 py-2 border font-semibold text-body-md border-orange-light rounded-md focus:outline-none focus:ring-2 focus:ring-orange-mid bg-white"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="popular">Popular</option>
              <option value="snacks">Snacks</option>
              <option value="regular menu">Regular Menu</option>
            </select>
          </div>
        </div>

        {type === "all" || type === "popular" ? (
          <>
            <h2 className="font-bold text-heading-sm text-center">
              Our <span className="text-orange-mid">Best Popular</span>
              <br />
              Indian Dish
            </h2>
            <div className="flex items-center justify-around flex-wrap gap-y-24 w-full">
              {menu.popular?.length ? (
                showDishes("popular")
              ) : (
                <span className="loading loading-spinner loading-lg text-orange-mid"></span>
              )}
            </div>
          </>
        ) : (
          ""
        )}

        {type === "all" || type === "snacks" ? (
          <>
            <h2 className="font-bold text-heading-md text-center pt-24">
              Our <span className="text-orange-mid"> Snacks</span> Menu
            </h2>
            <div className="flex items-center justify-around flex-wrap gap-y-24 w-full">
              {menu.snacks?.length ? (
                showDishes("snacks")
              ) : (
                <span className="loading loading-spinner loading-lg  text-orange-mid"></span>
              )}
            </div>
          </>
        ) : (
          ""
        )}

        {type === "all" || type === "regular menu" ? (
          <>
            <h2 className="font-bold text-heading-md text-center pt-24">
              Our <span className="text-orange-mid"> Regular</span> Menu
            </h2>
            <div className="flex items-center justify-around flex-wrap xl:gap-x-32 gap-y-24 w-full">
              {menu.menu?.length ? (
                showDishes("menu")
              ) : (
                <span className="loading loading-spinner loading-lg  text-orange-mid"></span>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Menu;
