import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const awardedData = [
  {
    title: "Water City Dreams",
    date: "September 18, 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Mountain Heights",
    date: "October 12, 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Ocean Breeze",
    date: "November 5, 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Sunset Valley",
    date: "December 1, 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Skyline Towers",
    date: "January 8, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Forest Retreat",
    date: "February 14, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Desert Mirage",
    date: "March 10, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Riverfront Park",
    date: "April 22, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Golden Fields",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Twelve",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Thirteen",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Fourteen",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Fifteen",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Sexteen",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Seventeen",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Eighteen",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Nineteen",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    title: "Twenty",
    date: "May 18, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
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

const Awarded = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Desktop uchun 3x3 grid
  const createDesktopSlides = () => {
    const slides = [];
    for (let i = 0; i < awardedData.length; i += 9) {
      slides.push(awardedData.slice(i, i + 9));
    }
    return slides;
  };

  // Mobile uchun 3ta card
  const createMobileSlides = () => {
    const slides = [];
    for (let i = 0; i < awardedData.length; i += 3) {
      slides.push(awardedData.slice(i, i + 3));
    }
    return slides;
  };

  const desktopSlides = createDesktopSlides();
  const mobileSlides = createMobileSlides();

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
                    className="bg-[#C4C4C4] rounded-[10px] p-4 text-white flex flex-col gap-4 min-h-[200px]"
                  >
                    <h3 className="text-[20px] lg:text-[23px] font-[700] line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] lg:text-[16px] font-[700]">
                      {item.date}
                    </p>
                    <p className="text-[14px] lg:text-[16px] font-[400] line-clamp-3">
                      {item.desc}
                    </p>
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

          <span className="text-gray-600 text-sm">
            {currentSlide + 1} / {desktopSlides.length}
          </span>

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

          <span className="text-gray-600 text-sm">
            {currentSlide + 1} / {mobileSlides.length}
          </span>

          <NextArrow
            onClick={() => mobileSliderRef.current?.slickNext()}
            disabled={currentSlide === mobileSlides.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Awarded;

