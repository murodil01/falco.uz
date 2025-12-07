import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import attend1 from "../../../assets/attended/attend1.jpg";
import attend2 from "../../../assets/attended/attend2.jpg";
import attend3 from "../../../assets/attended/attend3.jpg";
import attend4 from "../../../assets/attended/attend4.jpg";
import attend5 from "../../../assets/attended/attend5.jpg";
import attend6 from "../../../assets/attended/attend6.png";
import attend7 from "../../../assets/attended/attend7.jpg";
import attend8 from "../../../assets/attended/attend8.jpg";
import attend9 from "../../../assets/attended/attend9.jpg";
import attend10 from "../../../assets/attended/attend10.jpg";
import attend11 from "../../../assets/attended/attend11.jpg";
import attend12 from "../../../assets/attended/attend12.jpg";

const attendedData = [
  {
    id: 1,
    image: attend1,
    description: "QISQIT FALL FEST 2025 QUIZ WINNERS",
  },
  {
    id: 2,
    image: attend2,
    description: "QISQIT FALL FEST 2025 HACKATHON WINNERS",
  },
  {
    id: 3,
    image: attend3,
    description: "President tech awards hakatonida 4-o'rin qo'lga kiritildi !",
  },
  {
    id: 4,
    image: attend4,
    description:
      "K-Lab Uzbekistan StartUp Competition 4-o'rin qo'lga kiritildi !",
  },
  {
    id: 5,
    image: attend5,
    description:
      "Butunjahon kasb-hunar kollejlari ko'nikmalar tanlovi saralash bosqichi",
  },
  {
    id: 6,
    image: attend6,
    description: "Rektor Kubogi - Dron musobaqasida 1-o'rin!",
  },
  {
    id: 7,
    image: attend7,
    description:
      "World Skills Competition 2025 musobaqasining yakuniy bosqichi",
  },
  {
    id: 8,
    image: attend8,
    description:
      "VIT Chennai, International IBM Quantum Computing Courses 2025",
  },
  {
    id: 9,
    image: attend9,
    description: "Uzbekistan R&D camp 2025",
  },
  {
    id: 10,
    image: attend10,
    description:
      "Design Thinking & Digital Transformation” and “Living Lab Startup” hackathons, Janubiy Koreya 2024",
  },
  {
    id: 11,
    image: attend11,
    description: "Game Fest 2025, Toshkent",
  },
  {
    id: 12,
    image: attend12,
    description: "Plug and Play 2025 – The Ultimate Startup Pitch",
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
                    className="group rounded-[10px] flex flex-col gap-4 min-h-[200px] relative overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="Image"
                      loading="lazy"
                      className="w-full h-[260px] object-cover"
                    />

                    <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-2 py-1 rounded">
                      {item.description}
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
                    className="group rounded-[10px] flex flex-col gap-4 min-h-[200px] relative overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="Image"
                      loading="lazy"
                      className="w-full h-[260px] object-cover"
                    />

                    {/* Text overlay */}
                    <p
                      className="absolute bottom-3 left-3 right-3 text-white font-semibold text-[16px] bg-black/50 px-2 py-1 rounded transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                      {item.description}
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
