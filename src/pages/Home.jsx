<<<<<<< Updated upstream
import { Footer } from "../components/Footer";
export default function Home() {
  return (
    <>
      <div>
        <Footer />
=======
import heroImage from "../assets/Hero-img.svg";
import item from "../assets/image 1.svg";
<<<<<<< Updated upstream
=======
import { Footer } from "../components/Footer";

>>>>>>> Stashed changes
export default function Home() {
  return (
    <>
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
>>>>>>> Stashed changes
      </div>

      {/* ===== menu ===== */}

      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between py-10 lg:py-32">
        <div className="flex flex-col items-center lg:items-start gap-6 w-full">
          <h1 className="font-black text-heading-sm text-left lg:text-start">
            Our
            <span className="text-orange-dark"> Best Delivered </span> <br />
            Indian Dish
          </h1>
          <div className="flex w-full lg:flex-row flex-col justify-evenly py-5  ">
            <div>
              <div
                className="border-dashed border-4 border-orange-mid rounded-b-[9999px] rounded-t-full
    transition-all
    hover:-translate-y-2
    hover:shadow-xl
    duration-300 ease-in-out"
              >
                <img src={item} alt="product" className="p-5" />
              </div>
              <p className="text-center py-14 text-body-lg font-semibold">
                indian dish
              </p>
            </div>
            <div>
              <div
                className="border-dashed border-4 border-orange-mid rounded-b-[9999px] rounded-t-full
    transition-all
    hover:-translate-y-2
    hover:shadow-xl
    duration-300 ease-in-out"
              >
                <img src={item} alt="product" className="p-5" />
              </div>
              <p className="text-center py-14 text-body-lg font-semibold">
                indian dish
              </p>
            </div>
            <div>
              <div
                className="border-dashed border-4 border-orange-mid rounded-b-[9999px] rounded-t-full
    transition-all
    hover:-translate-y-2
    hover:shadow-xl
    duration-300 ease-in-out"
              >
                <img src={item} alt="product" className="p-5" />
              </div>
              <p className="text-center py-14 text-body-lg font-semibold">
                indian dish
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== menu ===== */}
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between py-10 lg:py-32">
        <div className="flex flex-col items-center lg:items-start gap-6 w-full">
          <h1 className="font-black text-heading-sm text-left lg:text-start">
            Our
            <span className="text-orange-dark"> Best Delivered </span> <br />
            Indian Dish
          </h1>
          <div className="flex w-full lg:flex-row flex-col justify-evenly py-5">
            {[1, 2, 3].map((_, index) => (
              <div key={index}>
                <div
                  className="border-dashed border-4 border-orange-mid rounded-b-[9999px] rounded-t-full
                  transition-all
                  hover:-translate-y-2
                  hover:shadow-xl
                  duration-300 ease-in-out"
                >
                  <img src={item} alt="product" className="p-5" />
                </div>
                <p className="text-center py-14 text-body-lg font-semibold">
                  indian dish
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
