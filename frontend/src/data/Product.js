import hoodie from "../assets/category/hoodie.jpg";
import sweatshirt from "../assets/category/sweatshrit.avif";
import tshirt from "../assets/category/tshirt.avif";
import kid from "../assets/category/kid.avif";

const products = [
  {
    id: 1,
    name: "Hoodie",
    price: 29.99,
    oldPrice: 49.99,
    image: hoodie,
    category: "Hoodie",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 19.99,
    oldPrice: 29.99,
    image: tshirt,
    category: "T-Shirt",
  },
  {
    id: 3,
    name: "Sweat Shirt",
    price: 39.99,
    oldPrice: 59.99,
    image: sweatshirt,
    category: "Sweat Shirt",
  },
  {
    id: 4,
    name: "Kids Wear",
    price: 19.99,
    oldPrice: 24.99,
    image: kid,
    category: "Baby",
  },
];

const categories = ["Hoodie", "T-Shirt", "Sweat Shirt", "Baby"];

export { products, categories }; // Fixed export
