import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Your Navbar component
import HomePage from "./Pages/Home"; // Your Home page
import ProductsPage from "./Pages/Products"; // Products page
import ContactPage from "./Pages/ContactUs"; // Contact page
import AboutPage from "./Pages/AboutUs"; // About page
import TrackOrderPage from "./Pages/TrackOrder"; // Track Order page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
