import { useState } from "react";
import btata from "../../assets/btata.png";
import { formatUSD } from "../../util/formatter";
import Swal from "sweetalert2";

const cardData = {
  name: "",
  number: "",
  expiration: "",
  cvv: "",
};
export default function CardDetails({ total, setCart }) {
  const [card, setCard] = useState(cardData);
  const [isValid, setIsValid] = useState("");
  const checkName = /^[A-Za-z\s'-]{6,26}$/;
  const checkNumber = /^[0-9]{16}$/;
  const checkCVV = /^[0-9]{3}$/;
  const date = new Date();

  const handleCard = () => {
    if (!checkName.test(card.name)) {
      setIsValid("invalid Name");
    } else if (!checkNumber.test(card.number)) {
      setIsValid("invalid Number");
    } else if (!card.expiration) {
      setIsValid("Card Expiration is required");
    } else if (new Date(card.expiration) < date) {
      setIsValid("Card Expired");
    } else if (!checkCVV.test(card.cvv)) {
      setIsValid("invalid CVV");
    } else {
      Swal.fire({
        title: "Order Placed!",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
      setIsValid("");
      setCard(cardData);
      setCart([]);
    }
  };

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
            placeholder="Ahmed Mamdoh"
            value={card.name}
            onChange={(e) => setCard({ ...card, name: e.target.value })}
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label>Card Number</label>
          <input
            type="text"
            className="w-full text-body-sm text-black py-3 px-4 rounded-md outline-8 border-none outline-orange-mid"
            value={card.number
              .replace(/(\d{4})/g, "$1 ")
              .replace(/\s+/g, " ")
              .trim()}
            onChange={(e) =>
              setCard({ ...card, number: e.target.value.replace(/\s/g, "") })
            }
            placeholder="1234 5678 9012 3456"
          ></input>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 gap-6 items-center">
          <div className="flex flex-col  gap-1 w-full">
            <label>Expiration date</label>
            <input
              type="month"
              className="w-full text-body-sm text-black py-3 px-4 rounded-md outline-8 border-none outline-orange-mid"
              value={card.expiration}
              onChange={(e) => setCard({ ...card, expiration: e.target.value })}
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label>CVV</label>
            <input
              type="number"
              className="w-full text-body-sm text-black py-3 px-4 rounded-md outline-8 border-none outline-orange-mid"
              value={card.cvv}
              onChange={(e) => setCard({ ...card, cvv: e.target.value })}
              placeholder="123"
            ></input>
          </div>
        </div>
        {!isValid ? (
          ""
        ) : (
          <div role="alert" className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{isValid}!</span>
          </div>
        )}
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
        onClick={handleCard}
      >
        Checkout
      </button>
    </section>
  );
}
