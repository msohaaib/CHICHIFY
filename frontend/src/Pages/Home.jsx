import Carousel from "../Components/Carousel";
import { products } from "../data/Product";
import CategoryCard from "../Components/CategoryCard";
import NewArrival from "../Components/NewArrival";
import Breadcrumbs from "../Components/BreadCrumbs";
// import ProductCard from "../Components/ProductCard";

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
      <Breadcrumbs />
    </div>
  );
};

export default Home;

{
  /* 🔹 New Arrivals */
}
{
  /*<div className="max-w-6xl mx-auto px-4 py-12">
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
</div>*/
}
