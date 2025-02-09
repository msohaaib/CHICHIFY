import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} className="text-black" />
    </div>
  );
};

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} className="text-black" />
    </div>
  );
};
NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
