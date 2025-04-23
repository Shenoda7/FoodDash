import React from "react";
import pattern from "../assets/food-pattern.png";

function AboutUs() {
  return (
    <section
      className="bg-orange-light py-16 font-lexend"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container max-w-4xl text-center">
        <h2 className="text-heading-md text-orange-dark font-semibold mb-6">
          About Us
        </h2>

        <p className="text-body-md text-grey-dark mb-6">
          At <span className="text-orange-mid font-bold">FoodDash</span>, we
          believe food is more than just fuel — it’s an experience, a comfort,
          and a way to connect. That’s why we’re here to revolutionize food
          delivery with a dash of care and a whole lot of flavor.
        </p>

        <p className="text-body-md text-grey-dark mb-6">
          Founded by a group of foodies and tech enthusiasts, FoodDash was born
          from the idea that great meals should be easily accessible, lightning
          fast, and always high quality. We’ve built a platform that connects
          local kitchens, passionate chefs, and hungry people with just a few
          taps.
        </p>

        <p className="text-body-md text-grey-dark mb-6">
          What makes us different? It’s our obsession with freshness, our love
          for local flavors, and our dedication to customer happiness. Every
          dish on our platform is crafted with care, sourced from trusted
          partners, and delivered hot and on time. Whether it’s a busy weekday
          lunch or a cozy weekend dinner, we’ve got your cravings covered.
        </p>

        <p className="text-body-md text-grey-dark mb-6">
          We also care deeply about sustainability and community. That’s why we
          use eco-friendly packaging, support local businesses, and invest in
          reducing food waste. When you order from FoodDash, you’re not just
          eating — you’re making a difference.
        </p>

        <p className="text-body-md text-grey-dark">
          So go ahead, explore the menu, try something new, and let us bring a
          little joy to your doorstep. Welcome to the FoodDash family — where
          every meal is a celebration.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
