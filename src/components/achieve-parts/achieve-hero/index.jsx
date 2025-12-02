import { useState, useEffect } from "react";
import achieve_bg from "../../../assets/achieve_bg.png";
import Attended from "../attended";
import Awarded from "../awarded";

const AchieveHero = () => {
  // LocalStorage'dan oldingi active buttonni o'qish
  const [active, setActive] = useState(() => {
    return localStorage.getItem("achieveActive") || "attended";
  });

  useEffect(() => {
    localStorage.setItem("achieveActive", active);
  }, [active]);

  return (
    <section className="relative py-[80px] mt-30">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10">
        <img
          loading="loader"
          src={achieve_bg}
          alt="Project Background"
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6 relative z-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white font-bold mb-12 text-center">
          Bizning <span className="text-[#E8C777]">Yutuqlarimiz</span>
        </h3>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 md:gap-6 shadow-md p-4 md:p-5 rounded-[100px] bg-white w-fit mx-auto border border-[#C6FFDFE5]">
          <button
            aria-label="attended"
            onClick={() => setActive("attended")}
            className={`text-[12px] md:text-[18px] font-[500] px-[25px] md:px-[55px] py-[8px] md:py-[12px] rounded-[30px] cursor-pointer ${
              active === "attended"
                ? "text-white"
                : "text-[#313131] border-2 border-[#22A75D]"
            }`}
            style={{
              background:
                active === "attended"
                  ? "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)"
                  : "transparent",
            }}
          >
            Ishtirok etilgan loyihalar
          </button>

          <button
            aria-label="awarded"
            onClick={() => setActive("awarded")}
            className={`text-[12px] md:text-[18px] font-[500] px-[25px] md:px-[55px] py-[8px] md:py-[12px] rounded-[30px] cursor-pointer ${
              active === "awarded"
                ? "text-white"
                : "text-[#313131] border-2 border-[#22A75D]"
            }`}
            style={{
              background:
                active === "awarded"
                  ? "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)"
                  : "transparent",
            }}
          >
            Mukofotlangan loyihalar
          </button>
        </div>

        {/* Componentlar */}
        <div className="mt-10">
          {active === "attended" && <Attended />}
          {active === "awarded" && <Awarded />}
        </div>
      </div>
    </section>
  );
};

export default AchieveHero;
