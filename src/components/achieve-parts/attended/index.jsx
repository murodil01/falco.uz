import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const attendedData = [
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

// Custom arrow komponentlari
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 bottom-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
    onClick={onClick}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 bottom-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
    onClick={onClick}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const Attended = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Desktop uchun 3x3 grid yaratish
  const createDesktopSlides = () => {
    const slides = [];
    for (let i = 0; i < attendedData.length; i += 9) {
      const slideItems = attendedData.slice(i, i + 9);
      slides.push(slideItems);
    }
    return slides;
  };

  // Mobile uchun 3 ta card bitta slide
  const createMobileSlides = () => {
    const slides = [];
    for (let i = 0; i < attendedData.length; i += 3) {
      const slideItems = attendedData.slice(i, i + 3);
      slides.push(slideItems);
    }
    return slides;
  };

  const desktopSlides = createDesktopSlides();
  const mobileSlides = createMobileSlides();

  // Desktop slider settings
  const desktopSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  // Mobile slider settings
  const mobileSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="w-full relative">
      {/* Desktop Slider */}
      <div className="hidden md:block">
        <Slider {...desktopSliderSettings}>
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

        {/* Desktop pagination */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <span className="text-gray-600 text-sm">
            {currentSlide + 1} / {desktopSlides.length}
          </span>
          <div className="flex gap-2">
            {desktopSlides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-[#C4C4C4]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...mobileSliderSettings}>
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

        {/* Mobile pagination */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <span className="text-gray-600 text-sm">
            {currentSlide + 1} / {mobileSlides.length}
          </span>
          <div className="flex gap-2">
            {mobileSlides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-[#C4C4C4]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attended;
