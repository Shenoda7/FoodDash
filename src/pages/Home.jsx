import heroImage from "../assets/Hero-img.svg";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="bg-orange-light">
        <div className=" container flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between py-16 lg:py-32">
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
      </div>
    </>
  );
}
