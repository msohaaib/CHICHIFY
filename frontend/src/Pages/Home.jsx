import { useState, useRef, useEffect, useMemo } from "react";
import Carousel from "../Components/Carousel";
import { products, categories } from "../data/Product"; // Fixed import name
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";

const TrendingSection = () => {
  const [activeCategory, setActiveCategory] = useState(
    categories[0] || "Hoodie"
  );
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          product.category.toLowerCase() === activeCategory.toLowerCase()
      ),
    [activeCategory]
  );

  useEffect(() => {
    const updateScrollButtons = () => {
      if (carouselRef.current) {
        setCanScrollLeft(carouselRef.current.scrollLeft > 0);
        setCanScrollRight(
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth <
            carouselRef.current.scrollWidth
        );
      }
    };

    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }

    return () => {
      if (ref) ref.removeEventListener("scroll", updateScrollButtons); // Fixed cleanup
    };
  }, [filteredProducts]);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center">Trending This Week</h2>

      {/* 🔹 Category Tabs */}
      <div className="flex justify-center space-x-6 my-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg pb-2 border-b-2 ${
              activeCategory === category
                ? "border-red-500 text-red-500"
                : "border-transparent text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🔹 Carousel Container */}
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full"
          >
            ◀
          </button>
        )}

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-hidden scroll-snap-x px-10 whitespace-nowrap"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-md"
                />
                <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-red-500 font-bold">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              No products found in this category.
            </p>
          )}
        </div>

        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full"
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Carousel />

      {/* 🔹 Shop By Categories */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-3xl font-semibold py-8">
          Shop By Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CategoryCard image={products[0].image} label="#hoodie" />
          <CategoryCard image={products[2].image} label="#sweatshirt" />
          <CategoryCard image={products[1].image} label="#tshirt" />

          <div className="col-span-1 sm:col-span-2 md:col-span-3 h-">
            <CategoryCard
              image={products[3].image}
              label="#kidswear"
              className="aspect-[16/6]"
            />
          </div>
        </div>
      </div>

      {/* 🔹 New Arrivals */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-3xl font-semibold py-8">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* 🔹 Trending Section */}
      <TrendingSection />
    </div>
  );
};

export default Home;
