import about from "../../assets/images/about-bg.png";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[100vh] bg-no-repeat"
      style={{
        backgroundImage: `url(${about})`,
        backgroundSize: "100% 100%", // Eni va balandlik to'liq ekran
        backgroundPosition: "center bottom", // Pastki qismga yopishadi
      }}
    >
      <div className="max-w-[1260px] mx-auto pt-20 md:pt-30 flex flex-col md:flex-row items-center gap-y-10 gap-x-40 px-10 relative z-10">
        {/* Chap taraf */}
        <div className="text-white">
          <h3 className="text-3xl md:text-[70px] font-[800] uppercase">
            Become our member now
          </h3>
        </div>

        {/* O‘ng taraf */}
        <div className="text-white flex flex-col gap-4">
          <p className="text-base md:text-[20px] font-[500] leading-relaxed">
            Where ambition takes flight. Joining FALCO means becoming part of a
            fast, intelligent, and innovative community where ideas turn into
            impact. Together, we learn, compete, and create opportunities that
            go beyond boundaries.
          </p>
          <p className="text-base md:text-[20px] font-[500] leading-relaxed">
            Whether you’re driven by startups, competitions, or innovation,
            FALCO is the launchpad that accelerates your growth. Don’t wait on
            the sidelines — step in and become part of the future we’re
            building.
          </p>
          <button
            className="mt-4 w-[260px] flex justify-center items-center gap-2 px-[47px] py-[14px] rounded-[24px] text-[20px] font-semibold text-white transition-colors cursor-pointer"
            style={{
              background:
                "linear-gradient(99.32deg, #191B21 0.56%, rgba(34,167,93,0.9) 59.52%, rgba(25,27,33,0.8) 117.27%)",
            }}
          >
            <span className="flex items-center gap-2">
              Learn more
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <ChevronRight size={30} />
              </motion.span>
            </span>
          </button>
        </div>
      </div>

      {/* Moslashuvchanlik uchun CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            #about {
              background-size: 100% auto; /* Eni to'liq, balandlik moslashadi */
              background-position: center bottom; /* Pastki qismga yopishadi */
              min-height: 100vh; /* To'liq ekran balandligi */
            }
          }
          @media (max-width: 640px) {
            #about {
              background-size: cover; /* Eni va balandlik ekran o'lchamiga moslashadi */
              background-position: center bottom; /* Pastki qismga yopishadi */
              min-height: 100vh; /* To'liq ekran balandligi */
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;