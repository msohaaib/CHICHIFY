import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/Carousel/img1.png";
import img2 from "../assets/Carousel/img2.png";
import { NextArrow, PrevArrow } from "./Arrow";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      id: 1,
      image: img1,
      title: "Winter Sale Upto 50% Off",
    },
    {
      id: 2,
      image: img2,
      title: "New Arrivals - Get Yours Now!",
    },
    {
      id: 3,
      image: img1,
      title: "Exclusive Discounts - Limited Time Offer",
    },
  ];

  return (
    <div className="py-12 overflow-hidden">
      <div className="container mx-auto">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center w-full px-4">
                {/* Image Section */}
                <div data-aos="zoom-in" className="flex justify-center">
                  <img
                    src={slide.image}
                    alt="Slide"
                    className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover"
                  />
                </div>
                {/* Content Section */}
                <div className="flex flex-col justify-center gap-4 sm:pt-0">
                  <h1
                    data-aos="fade-up"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                  >
                    {slide.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="text-sm sm:text-base md:text-lg text-gray-600 tracking-wide leading-6"
                  >
                    Limited-time offers on our best-selling products. Grab yours
                    now!
                  </p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
