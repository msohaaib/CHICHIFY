import Carousel from "../Components/Carousel";
import { products, features } from "../data/Product";
import CategoryCard from "../Components/CategoryCard";
import NewArrival from "../Components/NewArrival";
import HomeImg from "../assets/homeHero.jpg";
// import Breadcrumbs from "../Components/BreadCrumbs";
import ProductCard from "../Components/ProductCard";

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

          {/* 🔹 Kidswear category - Fixed size issue */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3">
            <CategoryCard
              image={products[3].image}
              label="#kidswear"
              className="h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* 🔹 New Arrival */}
      <NewArrival />

      <div className="relative w-full h-[75vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden my-12">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${HomeImg})`,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 sm:px-10">
          <h1 className="text-white text-4xl sm:text-5xl -rotate-6 md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight tracking-wide max-w-3xl mx-auto">
            Wear the Hype, <br className="hidden sm:block" /> Set the Trend
          </h1>
        </div>
      </div>

      {/* 🔹 You May Like */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-3xl font-semibold py-8">
          You May Like
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

      {/* 🔹 Features */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold mb-10">
            Why Shop With Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Icon */}
                <div className="text-5xl text-gray-700 mb-4">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">
                  {feature.description}
                </p>

                {/* Divider (Except Last Item) */}
                {index !== features.length - 1 && (
                  <div className="hidden lg:block absolute -right-[14px] h-3/4 border-r border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <Breadcrumbs /> */
}
