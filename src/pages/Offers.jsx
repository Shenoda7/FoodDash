import React from "react";

const offers = [
  {
    title: "20% Off on First Order",
    detail: "Use code FIRST20 to get a discount on your first order!",
    icon: "🎉",
  },
  {
    title: "Free Dessert",
    detail: "Get a free dessert with orders above $30.",
    icon: "🍰",
  },
  {
    title: "Loyalty Program",
    detail: "Earn points with every order. Redeem for rewards.",
    icon: "🏅",
  },
  {
    title: "Refer a Friend",
    detail: "Both you and your friend get $5 off!",
    icon: "🤝",
  },
  {
    title: "Weekend Deals",
    detail: "Up to 30% off on weekend special combos.",
    icon: "📆",
  },
  {
    title: "Free Delivery Mondays",
    detail: "No delivery charge every Monday on orders above $15.",
    icon: "🚚",
  },
  {
    title: "Combo Meals",
    detail: "Buy combos and save more on your favorite dishes.",
    icon: "🍛",
  },
  {
    title: "Birthday Perks",
    detail: "Get exclusive discounts and treats on your birthday!",
    icon: "🎂",
  },
  {
    title: "Flash Sales",
    detail: "Limited-time offers. Stay tuned!",
    icon: "⚡",
  },
];

function Offers() {
  return (
    <section className="bg-orange-light py-12 font-lexend">
      <div className="container">
        <h2 className="text-heading-md text-black mb-8 text-center font-semibold">
          Special Offers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow border-2 border-dashed border-orange-mid"
            >
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h3 className="text-heading-xs text-orange-mid font-semibold mb-2">
                {offer.title}
              </h3>
              <p className="text-body-sm text-grey-dark">{offer.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
