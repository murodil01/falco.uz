import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Subtract from "../../assets/Subtract.png";
import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";

const cardsData = [
  {
    id: 1,
    image: news1,
    date: "23.11.2025",
    title:
      "Hindistonda “Quantum Computing” bo‘yicha intensiv kurslar yakuniga yetdi!",
    link: "",
  },
  {
    id: 2,
    image: news2,
    date: "22.09.2025",
    title:
      "K-LAB Uzbekistan Startup Competition tanloviga ro’yhatdan o’tish boshlandi.",
    link: "",
  },
  {
    id: 3,
    image: news3,
    date: "30.06.2025",
    title:
      "President Tech Award” tanlovi va Hakaton uchun ro‘yxatdan o‘tish muddatlari uzaytirildi",
    link: "",
  },
];

const NewsMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // default desktop
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const GAP_PX = 24;

  // Resizing
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) setCardsPerView(1); // mobile
      else if (width < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3); // desktop
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Card width calculation
  useEffect(() => {
    const updateWidth = () => {
      const vw = viewportRef.current?.offsetWidth || 0;
      const width = cardsPerView
        ? Math.floor((vw - GAP_PX * (cardsPerView - 1)) / cardsPerView)
        : 250;
      setCardWidth(width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [cardsPerView]);

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () =>
    setCurrentIndex((i) => Math.min(cardsData.length - cardsPerView, i + 1));

  const translateX = -(currentIndex * (cardWidth + GAP_PX));

  return (
    <section
      className="w-full py-14 bg-cover mb-0 md:-mb-60 sm:mb-0"
      style={{
        backgroundImage: `url(${Subtract})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        width: "100%",
        minHeight: "1000px",
      }}
    >
      <div className="max-w-[1260px] mx-auto pt-[220px] px-4 sm:px-6 md:px-6 lg:px-8 flex flex-col gap-[60px]">
        {/* Title + Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center mb-6 gap-4">
          <div className="hidden md:block" />
          <h3 className="text-[45px] md:text-[60px] font-bold text-white text-center">
            Yangiliklar
          </h3>
          <div className="flex justify-center md:justify-end gap-3 mt-2 md:mt-0">
            <button
              aria-label="handlePrev"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full shadow transition ${
                currentIndex === 0
                  ? "bg-white cursor-not-allowed"
                  : "bg-[#09291B] hover:bg-[#0b3a27]"
              }`}
            >
              <ArrowLeft
                className={`${
                  currentIndex === 0 ? "text-[#E4E6E8]" : "text-white"
                }`}
              />
            </button>

            <button
            aria-label="handleNext"
              onClick={handleNext}
              disabled={currentIndex >= cardsData.length - cardsPerView}
              className={`p-2 rounded-full shadow transition ${
                currentIndex >= cardsData.length - cardsPerView
                  ? "bg-white cursor-not-allowed"
                  : "bg-[#09291B] hover:bg-[#0b3a27]"
              }`}
            >
              <ArrowRight
                className={`${
                  currentIndex >= cardsData.length - cardsPerView
                    ? "text-[#E4E6E8]"
                    : "text-white"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div ref={viewportRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(${translateX}px)`,
              gap: `${GAP_PX}px`,
            }}
          >
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 flex flex-col"
                style={{ width: `${cardWidth}px` }}
              >
                {/* Image container */}
                <div className="relative h-[225px] rounded-[12px] overflow-hidden group">
                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="loader"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Button */}
                  <a
                    aria-label="View More"
                    href={card.link}
                    className="absolute bottom-4 left-4 bg-gradient-to-r from-[#191B21] via-[#22A75D] to-[#1F8A54]
                   font-semibold text-white text-sm px-6 py-2 rounded-full
                   hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    View More
                  </a>
                </div>

                {/* Text box */}
                <div className="mt-3 bg-[#449367E5]/80 text-white p-3 rounded-[10px] min-h-[100px]">
                  <p className="text-xs opacity-80">{card.date}</p>
                  <p className="mt-1 text-sm font-semibold capitalize">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsMain;
