import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Hero_Section from "../../../assets/Hero_Section.png";
import hero_mobile from "../../../assets/hero_mobile.jpg";

const cardsData = [
  {
    id: 1,
    date: "10.12.2025",
    title: "President Tech Award asosiy yo‘nalishi finalchilari e’lon qilindi",
  },
  {
    id: 2,
    date: "12.12.2025",
    title: "Yoshlar innovatsiya tanlovi yakunlandi",
  },
  {
    id: 3,
    date: "15.12.2025",
    title: "Startup loyihalar bo‘yicha final bosqichi o‘tkazildi",
  },
  { id: 4, date: "20.12.2025", title: "IT Hackathon g‘oliblari taqdirlandi" },
  {
    id: 5,
    date: "25.12.2025",
    title: "Innovatsion texnologiyalar tanlovi boshlandi",
  },
  { id: 6, date: "25.12.2025", title: "Welcome to Falco Community" },
];

const ExpectedHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState(Hero_Section); // default desktop rasm
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const GAP_PX = 24;

  useEffect(() => {
    // 📱 ekranga qarab rasmni almashtirish
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(hero_mobile);
      } else {
        setBgImage(Hero_Section);
      }
    };

    handleResize(); // birinchi renderda ishlatish
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const update = () => {
      const vw = viewportRef.current?.offsetWidth || 0;
      const width = vw ? Math.floor((vw - GAP_PX * 2) / 3) : 0;
      setCardWidth(width);
      const maxIndex = Math.max(0, cardsData.length - 3);
      setCurrentIndex((ci) => Math.min(ci, maxIndex));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 3));
  const handleNext = () =>
    setCurrentIndex((i) => Math.min(cardsData.length - 3, i + 3));

  const translateX = -(currentIndex * (cardWidth + GAP_PX));

  return (
    <section
      className="w-full py-14 mt-26"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-[1260px] mx-auto px-4 flex flex-col gap-[60px]">
        {/* Title + Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center mb-6 gap-4">
          <div className="hidden md:block" />
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            Expected Competitions
          </h2>
          <div className="flex justify-center md:justify-end gap-3 mt-2 md:mt-0">
            <button
              aria-label="btn1"
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
              aria-label="btn2"
              onClick={handleNext}
              disabled={currentIndex >= cardsData.length - 3}
              className={`p-2 rounded-full shadow transition ${
                currentIndex >= cardsData.length - 3
                  ? "bg-white cursor-not-allowed"
                  : "bg-[#09291B] hover:bg-[#0b3a27]"
              }`}
            >
              <ArrowRight
                className={`${
                  currentIndex >= cardsData.length - 3
                    ? "text-[#E4E6E8]"
                    : "text-white"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 👉 Mobile */}
        <div className="block md:hidden space-y-6">
          {cardsData.slice(currentIndex, currentIndex + 3).map((card) => (
            <div key={card.id} className="flex flex-col">
              <div className="h-[225px] bg-[#C4C4C4] rounded-[10px] flex items-end justify-start p-4">
                <button
                  aria-label="view more"
                  className="bg-[#0F2C20] font-[700] text-white text-[16px] px-[27px] py-2 rounded-[40px]"
                  style={{
                    background:
                      "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
                  }}
                >
                  View More
                </button>
              </div>
              <div className="mt-3 bg-[#449367E5]/80 text-white p-3 rounded-[10px] min-h-[100px]">
                <p className="text-sm">{card.date}</p>
                <p className="mt-1 text-sm font-medium">{card.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 👉 Desktop */}
        <div ref={viewportRef} className="overflow-hidden hidden md:block">
          <div
            className="flex items-stretch transition-transform duration-500"
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
                <div className="h-[225px] bg-[#C4C4C4] rounded-[10px] flex items-end justify-start p-4">
                  <button
                    aria-label="view more"
                    className="bg-[#0F2C20] font-[700] text-white text-[16px] px-[27px] py-2 rounded-[40px]"
                    style={{
                      background:
                        "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
                    }}
                  >
                    View More
                  </button>
                </div>
                <div className="mt-3 bg-[#449367E5]/80 text-white p-3 rounded-[10px] min-h-[100px]">
                  <p className="text-sm">{card.date}</p>
                  <p className="mt-1 text-sm font-medium">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedHero;
