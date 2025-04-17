import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
