import React from "react";
import pattern from "../assets/food-pattern.png";

const services = [
  {
    title: "Fast Delivery",
    description: "Get your food delivered in under 30 minutes.",
    icon: "🚀",
  },
  {
    title: "Fresh Ingredients",
    description: "We use only the freshest local ingredients.",
    icon: "🥦",
  },
  {
    title: "24/7 Support",
    description: "We’re here to help anytime, anywhere.",
    icon: "📞",
  },
  {
    title: "Contactless Delivery",
    description: "Safety first! Zero-contact food handover.",
    icon: "📦",
  },
  {
    title: "Daily Specials",
    description: "Enjoy exclusive daily meal combos.",
    icon: "🍱",
  },
  {
    title: "Order Tracking",
    description: "Real-time tracking from kitchen to doorstep.",
    icon: "📍",
  },
  {
    title: "Custom Orders",
    description: "Choose ingredients and make it yours.",
    icon: "🧑‍🍳",
  },
  {
    title: "Eco Packaging",
    description: "We use biodegradable and recyclable packaging.",
    icon: "🌱",
  },
  {
    title: "Multi-Payment Options",
    description: "Pay with card, UPI, wallet, or cash.",
    icon: "💳",
  },
];

function Service() {
  return (
    <section
      className="bg-orange-light py-12 font-lexend"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container">
        <h2 className="text-heading-md text-orange-dark font-semibold mb-6 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow border-2 border-dashed border-orange-mid"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-heading-xs text-orange-mid font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-body-sm text-grey-dark">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
