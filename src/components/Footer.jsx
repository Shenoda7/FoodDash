import { Typography } from "@material-tailwind/react";
import logo from "../assets/Logo.svg";

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

const SITEMAP = [
  {
    title: <img src={logo} alt="logo" className="h-8" />,
    links: [copy, followUs],
  },
  {
    title: "Help Center",
    links: [
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        Discord
      </a>,
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>,
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>,
      <a href="/contact">Contact Us</a>,
    ],
  },
  {
    title: "Resources",
    links: [
      <a href="/blog">Blog</a>,
      <a href="/newsletter">Newsletter</a>,
      <a href="/free-products">Free Products</a>,
      <a href="/affiliate">Affiliate Program</a>,
    ],
  },
  {
    title: "Products",
    links: [
      <a href="/templates">Templates</a>,
      <a href="/ui-kits">UI Kits</a>,
      <a href="/icons">Icons</a>,
      <a href="/mockups">Mockups</a>,
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-gray-100 py-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key}>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase"
              >
                {title}
              </Typography>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Typography as="div" color="blue-gray" className="text-sm">
                      <span className="inline-block hover:scale-105 transition-transform duration-200">
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
