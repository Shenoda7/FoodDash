import { Typography } from "@material-tailwind/react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const copy = (
  <span>
    &copy; {currentYear}{" "}
    <a href="https://material-tailwind.com/" className="hover:underline">
      Material Tailwind
    </a>
    . All Rights Reserved.
  </span>
);

const followUs = (
  <span className="text-orange-dark font-black text-body-md ">
    Follow us on
  </span>
);
const icons = <img src="src/assets/social.svg" alt="social icons" />;
const SITEMAP = [
  {
    title: <img src={logo} alt="logo" className="h-8" />,
    links: [copy, followUs, icons],
  },
  {
    title: "Menu",
    links: [
      <Link to="/home">Home</Link>,
      <Link to="/offers">Offers</Link>,
      <Link to="/service">Service</Link>,
      <Link to="/about-us">About Us</Link>,
    ],
  },
  {
    title: "Information",
    links: [
      <Link to="/menu">Menu</Link>,
      <Link to="/quailty">Quailty</Link>,
      <Link to="/make-a-choice">Make A Choice</Link>,
      <Link to="/fast-delivery">Fast Delivery</Link>,
    ],
  },
  {
    title: "Contact",
    links: [
      <a href="tel:+1234567890">📞 +1 (234) 567-890</a>,
      <a href="mailto:support@example.com">✉️ support@example.com</a>,
      <span>🏢 123 Creative Street, Design City</span>,
      <span>🕒 Mon - Fri: 9:00 AM - 6:00 PM</span>,
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative w-full bg-gray-100 py-10 bg-orange-light
    border-dashed border-t-4 border-orange-mid"
    >
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key}>
              <Typography
                variant="small"
                className="mb-4 text-[#FF6000] font-black text-body-md uppercase"
              >
                {title}
              </Typography>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Typography as="div" className="text-sm">
                      <span className="inline-block text-[#939393] hover:scale-105 transition-transform duration-200">
                        {link}
                      </span>
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
