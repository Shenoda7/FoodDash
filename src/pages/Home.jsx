import heroImage from "../assets/Hero-img.svg";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div>
        <div className="min-h-screen flex items-center justify-evenly bg-[#ffefe8] px-10 py-16">
          <div className="max-w-lg">
            <h1 className="font-bold text-heading-sm">
              <span className="text-orange-mid"> Quick</span> and
              <span className="text-orange-mid"> Tasty</span> Food
              <span className="text-orange-mid"> Delivered </span> with
              <span className="text-orange-mid"> a Dash of </span> speed
            </h1>
            <div className="mt-6 flex flex-col items-start space-y-4">
              <button className="bg-white hover:bg-orange-mid text-black font-semibold py-3 px-12 rounded-full shadow-md transition duration-300 ease-in">
                Order Now
              </button>
              <button className="bg-white hover:bg-orange-mid text-black font-semibold py-3 px-12 rounded-full shadow-md transition duration-300 ease-in">
                Track Order
              </button>
            </div>
          </div>

          <div className="w-full max-w-[400px] h-full max-h-[400px] rounded-full overflow-hidden shadow-xl">
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
