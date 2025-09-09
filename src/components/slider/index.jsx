import projects from "../../assets/images/projects.png";
import agrobust from "../../assets/agrobust.png";
import freshline from "../../assets/freshline.png";
import robcont from "../../assets/robcont.png";
import foodquest from "../../assets/foodquest.png";

const Slider = () => {
  const images = [agrobust, freshline, robcont, foodquest];

  const repeatedImages = [...images, ...images, ...images, ...images];

  return (
    <section
      id="projects"
      className="relative w-full pb-10 mt-0 lg:-mt-130"
      style={{
        backgroundImage: `url(${projects})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col gap-20">
        <h3 className="text-[50px] text-[#09291B] font-bold text-center mb-40">
          Our <span className="text-[#9C8A5D]">Projects</span>
        </h3>

        {/* Slider container */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {repeatedImages.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg mx-3"
              >
                <img
                  src={img}
                  alt={`project-${idx}`}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-[50px] text-white font-bold text-center mt-20">
          Why <span className="text-[#9C8A5D]">Us</span>
        </h3>
      </div>

      {/* TailwindCSS uchun uzluksiz slider animatsiyasi */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); } /* 4 marta takrorlangan */
          }
          .animate-marquee {
            display: flex;
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Slider;
