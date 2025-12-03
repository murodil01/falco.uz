import projects from "../../assets/images/projects.png";
import agrobust from "../../assets/agrobust.png";
import fresh_line_pro from "../../assets/fresh_line_pro.png";
import robcont from "../../assets/robcont.png";
import foodquest from "../../assets/foodquest.png";

const Slider = () => {
  const images = [agrobust, fresh_line_pro, robcont, foodquest];
  const repeatedImages = [...images, ...images, ...images]; // faqat 3 marta

  return (
    <section
      id="projects"
      className="
        relative w-full mt-20 lg:-mt-130
        min-h-[400px] md:min-h-screen overflow-hidden
        bg-no-repeat bg-cover bg-bottom
      "
      style={{ backgroundImage: `url(${projects})` }}
    >
      <div className="relative z-10 flex flex-col gap-10 lg:gap-20">
        <h2 className="text-[clamp(30px,5vw,50px)] text-[#09291B] font-bold text-center mb-20">
          Bizning <span className="text-[#9C8A5D]">loyihalarimiz</span>
        </h2>

        {/* Slider */}
        <div className="overflow-hidden">
          <div className="marquee-track">
            {repeatedImages.map((img, idx) => (
              <div
                key={idx}
                className="
                  flex-shrink-0
                  w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48
                  bg-white rounded-full
                  flex items-center justify-center
                  shadow-lg mx-3
                "
              >
                <img
                  src={img}
                  alt={`project-${idx}`}
                  className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 12s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
