import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import award1 from "../../../assets/awarded/award1.jpg";
import award2 from "../../../assets/awarded/award2.jpg";
import award3 from "../../../assets/awarded/award3.jpg";
import award4 from "../../../assets/awarded/award4.jpg";
import award5 from "../../../assets/awarded/award5.jpg";
import award6 from "../../../assets/awarded/award6.jpg";
import award7 from "../../../assets/awarded/award7.jpg";

const awardedData = [
  {
    id: 1,
    image: award1,
    description: "Cultural Exchange Program 2024 (CEP) Winners",
  },
  {
    id: 2,
    image: award2,
    description:
      "Sog'lom Inson-Sog'lom millat Urganch Forumi Suzish bo'yicha 1-o'rin !",
  },
  {
    id: 3,
    image: award3,
    description: "Rektor Kubogi - Dron musobaqasida 1-o'rin!",
  },
  {
    id: 4,
    image: award4,
    description: "Uzbekistan Robotics Guinness World Records",
  },
  {
    id: 5,
    image: award5,
    description:
      "Butunjahon kasb-hunar kollejlari ko'nikmalar tanlovida faxrli 2-o'rin!",
  },
  {
    id: 6,
    image: award6,
    description: "QISQIT FALL FEST HAKATHON 2025 1-o'rin !",
  },
  {
    id: 7,
    image: award7,
    description: "QISQIT FALL FEST QUIZ 2025 1-o'rin!",
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
                    className="group rounded-[10px] flex flex-col gap-4 min-h-[200px] relative overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="Image"
                      loading="lazy"
                      className="w-full h-[260px] object-cover rounded-[10px]"
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
                    className="group rounded-[10px] flex flex-col gap-4 min-h-[200px] relative overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="Image"
                      loading="lazy"
                      className="w-full h-[260px] object-cover"
                    />

                    {/* Hover paytida ko‘rinadigan text */}
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
