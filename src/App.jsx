import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
