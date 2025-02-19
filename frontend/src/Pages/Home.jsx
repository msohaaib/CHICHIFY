import Carousel from "../Components/Carousel";
import hoodie from "../assets/category/hoodie.jpg";
import sweatshrit from "../assets/category/sweatshrit.avif";
import tshirt from "../assets/category/tshirt.avif";
import kid from "../assets/category/kid.avif";
const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Shop By Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First row */}
          <div className="relative h-3/4">
            <img
              src={hoodie}
              alt="Backpack"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute bottom-4 left-4 bg-white px-3 py-1 text-black text-sm font-semibold rounded">
              #backpack
            </span>
          </div>

          <div className="relative h-3/4">
            <img
              src={sweatshrit}
              alt="Shoes"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute bottom-4 left-4 bg-white px-3 py-1 text-black text-sm font-semibold rounded">
              #shoes
            </span>
          </div>

          <div className="relative row-span-2 h-2/3">
            <img
              src={tshirt}
              alt="Hats"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute bottom-4 left-4 bg-white px-3 py-1 text-black text-sm font-semibold rounded">
              #hats
            </span>
          </div>

          {/* Second row */}
          <div className="relative col-span-2 h-1/2">
            <img
              src={kid}
              alt="Glasses"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute bottom-4 left-4 bg-white px-3 py-1 text-black text-sm font-semibold rounded">
              #glasses
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
