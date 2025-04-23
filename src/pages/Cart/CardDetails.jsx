import btata from "../../assets/btata.png";
import { formatUSD } from "../../util/formatter";
export default function CardDetails({ total }) {
  return (
    <section className="py-12 px-12 sm:py-24 sm:px-24 text-white bg-orange-dark rounded-3xl flex flex-col">
      <div className="flex justify-between items-center gap-16">
        <h2 className="font-semibold text-heading-sm">Card Details</h2>
        <img
          src={btata}
          alt=""
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <div className="flex flex-col gap-1">
          <label>Name on card</label>
          <input
            type="text"
            className="w-full text-body-sm text-black py-3 px-4 rounded-md outline-8 border-none outline-orange-mid"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label>Card Number</label>
          <input
            type="number"
            className="w-full text-body-sm text-black py-3 px-4 rounded-md outline-8 border-none outline-orange-mid"
          ></input>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 gap-6 items-center">
          <div className="flex flex-col  gap-1 w-full">
            <label>Expiration date</label>
            <input
              type="month"
              className="w-full text-body-sm text-black py-3 px-4 rounded-md outline-8 border-none outline-orange-mid"
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label>CVV</label>
            <input
              type="number"
              className="w-full text-body-sm text-black py-3 px-4 rounded-md outline-8 border-none outline-orange-mid"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-11">
        <div className="flex justify-between items-center">
          <p className="text-body-md font-medium">Subtotal</p>
          <p className="text-body-md font-medium">{formatUSD(total)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-body-md font-medium">Shipping</p>
          <p className="text-body-md font-medium">$5</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-body-md font-medium">Total (Tax incl.)</p>
          <p className="text-body-md font-medium">
            {formatUSD(total + total * 0.14 + 5)}
          </p>
        </div>
      </div>
      <button
        className="w-full py-5 bg-white text-orange-dark font-bold text-body-md rounded-full mt-12
        hover:bg-transparent hover:text-white hover:ring-2 hover:ring-white
         transition-all duration-300 ease-in-out"
      >
        Checkout
      </button>
    </section>
  );
}
