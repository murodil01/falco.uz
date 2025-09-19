import projects from "../../assets/images/projects.png";
import agrobust from "../../assets/agrobust.png";
import fresh_line_pro from "../../assets/fresh_line_pro.png";
import robcont from "../../assets/robcont.png";
import foodquest from "../../assets/foodquest.png";

const Slider = () => {
  const images = [agrobust, fresh_line_pro, robcont, foodquest];
  const repeatedImages = [...images, ...images, ...images];

  return (
    <section
      id="projects"
      className="relative w-full mt-20 lg:-mt-130 min-h-[100vh] overflow-hidden"
      style={{
        backgroundImage: `url(${projects})`,
        backgroundSize: "auto 100%", // Balandlik to'liq ekran, eni moslashadi
        backgroundPosition: "center bottom", // Pastki qismga yopishadi
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 sm:gap-10 md:gap-16 lg:gap-20  relative z-10">
        <h2 className="text-[50px] text-[#09291B] font-bold text-center mb-40">
          Our <span className="text-[#9C8A5D]">Projects</span>
        </h2>

        {/* Slider container */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {repeatedImages.map((img, idx) => (
              <div
                key={idx}
                className="
                  flex-shrink-0 
                  w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 
                  bg-white rounded-full 
                  flex items-center justify-center 
                  shadow-lg mx-2 sm:mx-3
                "
              >
                <img
                  src={img}
                  alt={`project-${idx}`}
                  className="w-20 h-20 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-[50px] text-white font-bold text-center mt-20"></h3>
      </div>

      {/* TailwindCSS uchun uzluksiz slider animatsiyasi va moslashuvchanlik */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 10s linear infinite;
          }
          @media (max-width: 768px) {
            #projects {
              background-size: auto 100%; /* Balandlik to'liq ekran, eni moslashadi */
              background-position: center bottom; /* Pastki qismga yopishadi */
              min-height: 100vh; /* To'liq ekran balandligi */
            }
          }
          @media (max-width: 640px) {
            #projects {
              background-size: auto 100%; /* Balandlikni to'liq egallaydi */
              background-position: center bottom; /* Pastki qismga yopishadi */
              min-height: 100vh; /* To'liq ekran balandligi */
            }
          }
        `}
      </style>
    </section>
  );
};

export default Slider;
