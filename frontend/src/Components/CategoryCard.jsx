/* eslint-disable react/prop-types */
const CategoryCard = ({ image, label, className }) => (
  <div className={`relative ${className}`}>
    <img
      src={image}
      alt={label}
      className="w-full h-full object-cover rounded-lg"
    />
    <span className="absolute bottom-4 left-4 bg-white px-3 py-1 text-black text-sm font-semibold rounded">
      {label}
    </span>
  </div>
);

export default CategoryCard;
