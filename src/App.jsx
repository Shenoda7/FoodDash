import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import Service from "./pages/Service.jsx";
import Offers from "./pages/Offers.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AdminPanel from "./pages/Admin/AdminPanel.jsx";

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  function getMenu() {
    const url = import.meta.env.VITE_API_URL;
    axios({ url: `${url}/products`, method: "GET" })
      .then((res) => {
        setMenu(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      });
  }
  useEffect(() => {
    getMenu();
  }, [isUpdate]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home menu={menu} />} />
          <Route
            path="/admin"
            element={<AdminPanel menu={menu} setIsUpdate={setIsUpdate} />}
          ></Route>
          <Route
            path="/menu"
            element={<Menu menu={menu} cart={cart} setCart={setCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/service" element={<Service />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
