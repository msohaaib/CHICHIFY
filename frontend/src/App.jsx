import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Hoodies from "./Pages/Hoodies";
import Kids from "./Pages/Kids";
import SweatShirts from "./Pages/SweatShirt";
import TShirts from "./Pages/TShirts";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
// import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/t-shirts" element={<TShirts />} />
        <Route path="/sweatshirts" element={<SweatShirts />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
