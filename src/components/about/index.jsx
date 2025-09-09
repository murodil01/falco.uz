import about from "../../assets/images/about-bg.png";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-full h-[860px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="max-w-[1260px] mx-auto py-20 md:py-25 flex flex-col md:flex-row items-center gap-40 px-10">
        {/* Chap taraf */}
        <div className=" text-white">
          <h3 className="text-3xl md:text-[70px] font-[800]">
            Become our member now
          </h3>
        </div>

        {/* O‘ng taraf */}
        <div className=" text-white flex flex-col gap-4">
          <p className="text-base md:text-[20px] font-[500] leading-relaxed">
            Where passion meets purpose. Together, we learn, grow, and build the
            future. Falco is not just a community — it's your launchpad to
            greatness.
          </p>
          <p className="text-base md:text-[20px] font-[500] leading-relaxed">
            Where passion meets purpose. Together, we learn, grow, and build the
            future. Falco is not just a community — it's your launchpad to
            greatness. Where passion meets purpose. Together, we learn, grow,
            and build the future. Falco is not just a community — it's your
            launchpad to greatness.
          </p>
          <button
            className="mt-4 w-[230px] flex justify-center items-center gap-2 px-6 py-[14px] rounded-[24px] text-[20px] font-semibold text-white transition-colors"
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
    </section>
  );
};

export default About;
