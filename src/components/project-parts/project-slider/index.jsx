import { useEffect, useState } from "react";
import project_slider from "../../../assets/project_slider.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Agroboost_pro from "../../../assets/Agroboost_pro.png";
import fresh_line_pro from "../../../assets/fresh_line_pro.png";
import FoodQuest_pro from "../../../assets/FoodQuest_pro.png";
import robocontest from "../../../assets/robocontest.png";
import com from "../../../assets/com.webp";

const images = [
  {
    title: "Agroboost",
    description:
      "AgroBoost fermerlar uchun zamonaviy raqamli yechimlarni taqdim etadi: dron orqali kuzatuv, aqlli sensorlar va ma’lumotlar tahlili orqali ekinlarni aniq boshqarish imkoniyati yaratiladi. Platforma dalalardan real vaqt rejimida ma’lumot yig‘adi va sug‘orish, o‘g‘itlash hamda hosilni yig‘ib olish bo‘yicha aniq tavsiyalar beradi. \n\nAgroBoostning asosiy afzalligi — hosildorlikning oshishi, xarajatlarning kamayishi va qishloq xo‘jaligida yanada barqaror, samarali jarayonlarning shakllanishidir. U an’anaviy usullardagi past unumdorlik va zamonaviy texnologiyalarga kirishning cheklanganligi kabi muammolarni bartaraf etib, fermerlarning ishonchli va asosli qarorlar qabul qilishiga yordam beradi.",
    image: Agroboost_pro,
  },
  {
    title: "FoodQuest UZ",
    description:
      "FoodQuest uses digital tools such as gamification features, special “magic sales,” and dynamic pricing to make food discovery engaging and affordable. It works by connecting restaurants and food providers with customers through a smart platform that offers discounts, rewards, and real-time availability of meals. The benefits include lower food prices, exciting user experiences, and better visibility for food businesses. FoodQuest addresses the problem of high food costs and unnecessary waste by redistributing surplus meals and balancing food consumption across the country.",
    image: fresh_line_pro,
  },
  {
    title: "Robocontest UZ",
    description:
      "Robocontest offers tools such as coding challenges, problem sets, and automated evaluation systems. It works by providing an online platform where participants can solve tasks, join contests, and receive instant feedback on their solutions. The benefit is hands-on practice, skill improvement, and preparation for real-world programming. It solves the problem of limited opportunities for young developers to test their knowledge and compete on an international level.",
    image: FoodQuest_pro,
  },
  {
    title: "Freshline",
    description:
      "Freshline provides logistics tools like digital tracking, route optimization, and cold-chain monitoring for fresh product delivery. It works by connecting farmers, suppliers, and customers through a transparent platform that ensures timely and safe delivery. The benefits include fresher products, reduced waste, and lower costs for both businesses and consumers. It solves the problem of inefficiency and product loss in traditional supply chains by offering smarter, technology-driven distribution.",
    image: robocontest,
  },
  {
    title: "Coming soon",
    description:
      "We never get tired of creating. 🚀 Another startup is on the way — bigger, smarter, and ready to inspire. Stay tuned, the future is loading…",
    image: com,
  },
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const current = images[currentIndex];
  const next = images[(currentIndex + 1) % totalImages]; // keyingi rasm

  // 🔹 Auto slide har 5 sekunda
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="relative py-[80px] mt-30">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10">
        <img
          src={project_slider}
          alt="Project Background"
          className="w-full h-[215px] object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6 relative z-10">
        <h3 className="text-4xl text-white md:text-5xl font-[700] mb-[126px] text-center">
          Bizning <span className="text-[#E8C777]">loyihalarimiz</span>
        </h3>

        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Left text part */}
          <div className="md:w-1/2 space-y-4 min-h-[360px] flex flex-col">
            <h3 className="text-[36px] text-[#09291B] font-[600]">
              {current.title}
            </h3>

            <p className="text-[#6E7074] font-[500] text-[18px] mt-[30px] whitespace-pre-line">
              {current.description}
            </p>
          </div>

          {/* Right slider part */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="flex flex-row items-center gap-4 md:gap-6">
              {/* Main Image */}
              <img
                src={current.image}
                alt={current.title}
                className="w-[180px] h-[180px] md:w-[320px] md:h-[320px] object-cover rounded-[10px] shadow-lg"
              />

              {/* Next preview image */}
              <img
                src={next.image}
                alt={next.title}
                onClick={handleNext}
                className="w-[90px] h-[90px] md:w-[160px] md:h-[160px] object-cover rounded-[10px] opacity-70 hover:opacity-100 transition cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Pagination & Controls */}
        <div className="flex flex-row justify-center items-center gap-4 mt-[80px]">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="text-[#09291B] p-2 hover:bg-gray-200 rounded-full transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Pagination Numbers */}
          <div className="flex flex-wrap justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2 rounded-full font-medium transition
        ${
          currentIndex === idx
            ? "bg-[#09291B] text-white"
            : "bg-white text-[#09291B]"
        }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="text-[#09291B] p-2 hover:bg-gray-200 rounded-full transition"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
