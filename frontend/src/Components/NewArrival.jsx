import { useState, useRef, useEffect, useMemo } from "react";
import { categories, CategoryProducts } from "../data/Product";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [activeCategory, setActiveCategory] = useState(
    categories[0] || "Hoodie"
  );
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProducts = useMemo(
    () =>
      CategoryProducts.filter(
        (product) =>
          product.category.toLowerCase() === activeCategory.toLowerCase()
      ),
    [activeCategory]
  );

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

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
      if (ref) ref.removeEventListener("scroll", updateScrollButtons);
    };
  }, [filteredProducts]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const productWidth = carouselRef.current.firstChild.offsetWidth + 16;
      carouselRef.current.scrollBy({ left: -productWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const productWidth = carouselRef.current.firstChild.offsetWidth + 16;
      carouselRef.current.scrollBy({ left: productWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center">New Arrivals</h2>

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
      <div className="relative overflow-hidden">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-10"
          >
            ◀
          </button>
        )}

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden px-10 whitespace-nowrap scroll-smooth"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product.id} to={product.path}>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] bg-white shadow-md rounded-lg p-4 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover rounded-md"
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
              </Link>
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-10"
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
