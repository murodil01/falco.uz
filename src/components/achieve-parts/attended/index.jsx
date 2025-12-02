import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import attend1 from "../../../assets/attended/attend1.png";
import attend2 from "../../../assets/attended/attend2.png";
import attend3 from "../../../assets/attended/attend3.png";
import attend4 from "../../../assets/attended/attend4.png";
import attend5 from "../../../assets/attended/attend5.png";
import attend6 from "../../../assets/attended/attend6.png";

const attendedData = [
  {
    id: 1,
    image: attend1,
  },
  {
    id: 2,
    image: attend2,
  },
  {
    id: 3,
    image: attend3,
  },
  {
    id: 4,
    image: attend4,
  },
  {
    id: 5,
    image: attend5,
  },
  {
    id: 6,
    image: attend6,
  },
];
// Custom Arrow komponentlari
const NextArrow = ({ onClick, disabled }) => (
  <button
    className={`bg-[#09291B] text-white rounded-full p-3 shadow-lg transition-colors ${
      disabled
        ? "opacity-40 cursor-not-allowed"
        : "hover:bg-gray-700 cursor-pointer"
    }`}
    onClick={!disabled ? onClick : undefined}
    disabled={disabled}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>
);

const PrevArrow = ({ onClick, disabled }) => (
  <button
    className={`bg-[#09291B] text-white rounded-full p-3 shadow-lg transition-colors ${
      disabled
        ? "opacity-40 cursor-not-allowed"
        : "hover:bg-gray-700 cursor-pointer"
    }`}
    onClick={!disabled ? onClick : undefined}
    disabled={disabled}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>
);

const Attended = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Desktop uchun 3x3 grid
  const createDesktopSlides = () => {
    const slides = [];
    for (let i = 0; i < attendedData.length; i += 9) {
      slides.push(attendedData.slice(i, i + 9));
    }
    return slides;
  };

  // Mobile uchun 3ta card
  const createMobileSlides = () => {
    const slides = [];
    for (let i = 0; i < attendedData.length; i += 3) {
      slides.push(attendedData.slice(i, i + 3));
    }
    return slides;
  };

  const desktopSlides = createDesktopSlides();
  const mobileSlides = createMobileSlides();

  // Ikkita ref ishlatamiz
  const desktopSliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  return (
    <div className="w-full relative">
      {/* Desktop */}
      <div className="hidden md:block">
        <Slider
          ref={desktopSliderRef}
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          beforeChange={(current, next) => setCurrentSlide(next)}
        >
          {desktopSlides.map((slideItems, slideIdx) => (
            <div key={slideIdx} className="px-2">
              <div className="grid grid-cols-3 gap-6">
                {slideItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-[10px] flex flex-col gap-4 min-h-[200px]"
                  >
                    <img src={item.image} alt="Image" loading="loader"/>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <PrevArrow
            onClick={() => desktopSliderRef.current?.slickPrev()}
            disabled={currentSlide === 0}
          />

          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-sm mb-2">
              {currentSlide + 1} / {desktopSlides.length}
            </span>
          </div>

          <NextArrow
            onClick={() => desktopSliderRef.current?.slickNext()}
            disabled={currentSlide === desktopSlides.length - 1}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Slider
          ref={mobileSliderRef}
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          beforeChange={(current, next) => setCurrentSlide(next)}
        >
          {mobileSlides.map((slideItems, slideIdx) => (
            <div key={slideIdx} className="px-2">
              <div className="flex flex-col gap-4">
                {slideItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#C4C4C4] rounded-[10px] p-4 text-white flex flex-col gap-4"
                  >
                    <h3 className="text-[20px] font-[700]">{item.title}</h3>
                    <p className="text-[14px] font-[700]">{item.date}</p>
                    <p className="text-[14px] font-[400]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <PrevArrow
            onClick={() => mobileSliderRef.current?.slickPrev()}
            disabled={currentSlide === 0}
          />

          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-sm mb-2">
              {currentSlide + 1} / {mobileSlides.length}
            </span>
          </div>

          <NextArrow
            onClick={() => mobileSliderRef.current?.slickNext()}
            disabled={currentSlide === mobileSlides.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Attended;
