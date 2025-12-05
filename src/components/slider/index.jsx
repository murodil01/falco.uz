import agrobust from "../../assets/slider/agrobust.png";
import fresh_line_pro from "../../assets/slider/fresh_line_pro.png";
import robcont from "../../assets/slider/robcont.png";
import foodquest from "../../assets/slider/foodquest.png";
import about_slider from "../../assets/about_slider.jpg";
import About from "../about";

const Slider = () => {
  const images = [agrobust, fresh_line_pro, robcont, foodquest];
  // 3 marta takrorlaymiz. Endi xato ehtimoli ancha kamayadi.
  const repeatedImages = [...images, ...images, ...images];

  return (
    <section
      id="projects"
      className="relative w-full mt-20 lg:-mt-90 min-h-[400px] md:min-h-screen overflow-hidden bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${about_slider})` }}
    >
      <div className="relative z-10 flex flex-col gap-10 lg:gap-20">
        <h2 className="text-[clamp(30px,5vw,50px)] text-[#09291B] font-bold text-center mb-20">
          Bizning <span className="text-[#9C8A5D]">loyihalarimiz</span>
        </h2>

        <div className="overflow-hidden">
          <div className="marquee-track">
            {repeatedImages.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center shadow-lg mx-3"
              >
                <img
                  loading="lazy"
                  src={img}
                  alt={`project-${idx}`}
                  className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <About />
      </div>

      {/* 🛠️ TAKOMILLASHTIRILGAN CSS STYLAR (3x Takrorlashga moslashtirilgan) */}
      <style>
        {`
        .marquee-track {
          display: flex;
          width: max-content; 
          /* Animatsiya tezligi - bu faqat bitta element to'plamini o'tish vaqtini bildiradi. 
            Vaqtni oshirdik (masalan, 25s), chunki endi 3 to'plam bor. 
          */
          animation: marquee 25s linear infinite; 
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          /* 100% da endi umumiy kenglikning 1/3 qismiga siljish kerak. 
            Bu degani elementlarning BIRINCHI to'plami tugagan joyga aniq siljishdir.
          */
          100% { transform: translateX(-33.3333%); } 
        }

        /* Mobile fix */
        @media (max-width: 640px) {
          #projects {
            background-position: center bottom;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Slider;
