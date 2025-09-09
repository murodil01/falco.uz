import planners from "../../../assets/planners.png";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Planners = () => {
  return (
    <div className="py-[70px] max-w-[1260px] mx-auto px-4 md:px-6">
      <h3 className="text-center font-[700] text-[36px] sm:text-[50px] text-[#313131]">
        Trip <span className="text-[#9C8A5D]">Plans</span>
      </h3>

      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-[55px] mt-[60px] md:mt-[100px]">
        {/* Text Section */}
        <div className="flex flex-col gap-4 md:gap-[30px] md:w-1/2">
          <div className="flex items-center gap-5">
            <p className="bg-[#F3F2ED] text-[#09291B] text-[26px] font-[300] rounded-[50px] px-[25px] py-[5px]">Know Before You Go</p>
            <span className="text-[30px]">🌎</span>
          </div>
          <h3 className="font-[600] text-[28px] sm:text-[36px] text-[#313131]">
            Traveling opens the door to creating
            <span className="text-[#9C8A5D]"> memories</span>
          </h3>
          <p className="text-[#6E7074] text-[16px] sm:text-[18px] font-[400]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae
            tempora dignissimos, animi praesentium molestias perferendis porro
            expedita delectus. Soluta natus porro.
          </p>
          <button
            className="mt-4 w-full md:w-[310px] flex justify-center items-center gap-2 px-6 py-[14px] rounded-[24px] text-[18px] sm:text-[20px] font-semibold text-white transition-colors"
            style={{
              background:
                "linear-gradient(99.32deg, #191B21 0.56%, rgba(34,167,93,0.9) 59.52%, rgba(25,27,33,0.8) 117.27%)",
            }}
          >
            <span className="flex items-center gap-2">
              JOIN US
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <ChevronRight size={30} />
              </motion.span>
            </span>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={planners}
            alt="Planners"
            className="max-w-[100%] md:max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Planners;
