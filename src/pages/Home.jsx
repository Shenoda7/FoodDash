import heroImage from "../assets/Hero-img.svg";
import fastDelivery from "../assets/fast-delivery.svg";
import fresh from "../assets/fresh.svg";
import freeDelivery from "../assets/freeDelivery.svg";
import HomeProduct from "../components/HomeProduct";
import { Rerousel } from "rerousel";
import star from "../assets/Star 1.svg";
import { useRef } from "react";
import pattern from "../assets/food-pattern.png";
import { Link } from "react-router-dom";
import offer1 from "../assets/offer 1.svg";
import offer2 from "../assets/offer 2.svg";
import offer3 from "../assets/offer 3.svg";

export default function Home({ menu }) {
  const itemRef = useRef(null);
  return (
    <div
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="bg-orange-light">
        <div className="container flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between py-16 lg:py-32">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <h1 className="font-black text-heading-lg text-center lg:text-start">
              <span className="text-orange-dark">Quick </span>
              and
              <span className="text-orange-dark"> Tasty</span>
              <br /> Food
              <span className="text-orange-dark"> Delivered </span>
              with
              <span className="text-orange-dark">
                &nbsp;a
                <br />
                Dash of&nbsp;
              </span>
              speed
            </h1>

            <button className="bg-orange-mid  text-white hover:text-orange-mid hover:bg-transparent hover:ring-2 hover:ring-orange-mid font-bold text-body-sm py-3 px-20 rounded-full transition duration-300 ease-in-out">
              Order Now
            </button>
            <button className="bg-orange-transparent hover:bg-orange-mid hover:text-white text-orange-mid ring-2 ring-orange-mid font-bold text-body-sm py-3 px-[76px] rounded-full transition duration-300 ease-in-out">
              Track Order
            </button>
          </div>
          <div className="w-full max-w-[500px] h-full max-h-[500px] rounded-full overflow-hidden">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" w-full sm:px-24 translate-y-[50%]">
          <div className="bg-white  py-9 px-6 flex flex-wrap gap-y-9 justify-evenly rounded-3xl shadow-md">
            <div className="flex items-center gap-x-6">
              <img src={fastDelivery} alt="Item 1" className="w-24 h-24" />
              <div>
                <h4 className="font-bold text-heading-xs">Fast Delivery</h4>
                <p className="text-body-sm font-medium text-grey-dark w-48">
                  Promise To Deliver Within 30 Mins
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-6">
              <img src={fresh} alt="Item 1" className="w-24 h-24" />
              <div>
                <h4 className="font-bold text-heading-xs">Fresh Food</h4>
                <p className="text-body-sm font-medium text-grey-dark w-56">
                  Your Food Will Be Delivered 100% Fresh To Your Home.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-6">
              <img src={freeDelivery} alt="Item 1" className="w-24 h-24" />
              <div>
                <h4 className="font-bold text-heading-xs">Free Delivery</h4>
                <p className="text-body-sm font-medium text-grey-dark w-60">
                  Your Food Delivery Is Absolutely Free. No Cost Just Order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== menu ===== */}
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between  pt-72 lg:pt-48 pb-14">
        <div className="flex flex-col items-center lg:items-start gap-y-16 w-full">
          <div className="flex flex-col lg:flex-row gap-y-10 w-full justify-between items-center">
            <h2 className="font-bold text-heading-lg lg:text-start text-center">
              Our
              <span className="text-orange-dark"> Best Delivered </span> <br />
              Indian Dish
            </h2>
            <p className="text-body-md text-grey-mid w-4/5 lg:w-2/5">
              It’s Not Just About Bringing You Good Food From Restaurants, We
              Deliver You Experience
            </p>
          </div>
          <div className="flex w-full gap-y-16 lg:flex-row items-center flex-col justify-evenly py-5">
            {menu?.length ? (
              menu
                .filter((dish) => dish.tag === "popular")
                .slice(0, 3)
                .map((dish) => (
                  <HomeProduct key={dish._id} img={dish.img} name={dish.name} />
                ))
            ) : (
              <span className="loading loading-spinner loading-lg text-orange-mid"></span>
            )}
          </div>
        </div>
      </div>

      {/*Carousel*/}
      <div className="w-full bg-orange-light py-7 flex justify-center">
        {menu.length > 0 ? (
          <Rerousel itemRef={itemRef} interval={2000}>
            {menu.map((dish) => (
              <div
                key={dish._id}
                ref={itemRef}
                className="flex justify-center items-center gap-x-6 md:w-[30rem] w-full"
              >
                <img src={star} alt="star" className="w-12 h-12" />
                <h3 className="text-body-lg font-bold">{dish.name}</h3>
              </div>
            ))}
          </Rerousel>
        ) : (
          <h3 className="text-heading-sm font-medium">Loading...</h3>
        )}
      </div>

      {/* regular menu */}
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between  pt-72 lg:pt-48 pb-14">
        <div className="flex flex-col items-center lg:items-start gap-y-16 w-full">
          <div className="flex flex-col lg:flex-row gap-y-10 w-full justify-between items-center">
            <div className="flex flex-col gap-y-8">
              <h2 className="font-bold text-heading-lg lg:text-start text-center">
                Our
                <span className="text-orange-dark"> Regular </span>
                Menu
              </h2>
              <p className="text-body-md text-grey-mid ">
                There Are Our Regular Menus.
                <br /> You Can Order Anything You Like.
              </p>
            </div>
            <Link
              to="/menu"
              className="text-body-md lg:w-auto w-3/5 text-center font-medium text-white bg-orange-mid py-4 px-8 rounded-full"
            >
              See All
            </Link>
          </div>
          <div className="flex w-full gap-y-16 lg:flex-row items-center flex-col justify-evenly py-5">
            {menu?.length ? (
              menu
                .filter((dish) => dish.tag === "menu")
                .slice(0, 3)
                .map((dish) => (
                  <HomeProduct key={dish._id} img={dish.img} name={dish.name} />
                ))
            ) : (
              <span className="loading loading-spinner loading-lg text-orange-mid"></span>
            )}
          </div>
        </div>
      </div>

      {/* Offers */}
      <div className="flex py-16 gap-6 flex-col xl:flex-row items-center justify-center">
        <img src={offer1} alt="Offer 1" />

        <div className="flex flex-col gap-y-6">
          <img src={offer2} alt="Offer 2" />
          <img src={offer3} alt="Offer 3" />
        </div>
      </div>
    </div>
  );
}
