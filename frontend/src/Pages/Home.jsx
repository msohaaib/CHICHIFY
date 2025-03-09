import Carousel from "../Components/Carousel";
import hoodie from "../assets/category/hoodie.jpg";
import sweatshirt from "../assets/category/sweatshrit.avif";
import tshirt from "../assets/category/tshirt.avif";
import kid from "../assets/category/kid.avif";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";

const products = [
  { id: 1, name: "Hoodie", price: 29.99, image: hoodie },
  { id: 2, name: "T-Shirt", price: 19.99, image: tshirt },
  { id: 3, name: "Sweat Shirt", price: 39.99, image: sweatshirt },
  { id: 4, name: "Kids Wear", price: 19.99, image: kid },
];

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div>
        <Carousel />
      </div>

      {/* Shop By Categories */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-3xl font-semibold py-8">
          Shop By Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Standard Categories */}
          <CategoryCard
            image={hoodie}
            label="#hoodie"
            className="aspect-[4/5]"
          />
          <CategoryCard
            image={sweatshirt}
            label="#sweatshirt"
            className="aspect-[4/5]"
          />
          <CategoryCard
            image={tshirt}
            label="#tshirt"
            className="aspect-[4/5]"
          />

          <div className="col-span-1 sm:col-span-2 md:col-span-3">
            <CategoryCard
              image={kid}
              label="#kidswear"
              className="aspect-[16/6]"
            />
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-3xl font-semibold py-8">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onAddToCart={() => console.log(`${product.name} added to cart`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
