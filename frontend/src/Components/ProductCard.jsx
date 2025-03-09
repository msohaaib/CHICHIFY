/* eslint-disable react/prop-types */
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-md"
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">${price}</p>
      </div>

      {/* {onAddToCart && (
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-slate-800 text-white py-2 rounded-md hover:bg-black transition"
        >
          Add to Cart
        </button>
      )} */}
    </div>
  );
};

export default ProductCard;
