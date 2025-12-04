import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Welcome = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center">
      <h3 className="capitalize text-center text-[#09291B] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[700] leading-tight">
        Falcoga <span className="text-[#9C8A5D]">xush kelibsiz</span>
      </h3>

      <p className="text-center text-[#313131] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[400]">
        Falco is an exclusive network of ambitious youth across Uzbekistan,
        uniting future leaders in tech, business, sports, education, and more.
        If you’re ready for real challenges, teamwork, and growth — start your
        application below.
      </p>
      <button
        onClick={onContinue}
        className="mt-4 w-[200px] sm:w-[280px] md:w-[300px] lg:w-[360px] 
             flex justify-center items-center gap-2 
             px-4 sm:px-5 md:px-6 
             py-3 sm:py-4 md:py-5 lg:py-[22px] 
             font-[500] rounded-[10px] md:rounded-[12px] 
             text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] 
             text-white transition-colors"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        Boshlash
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ArrowRight
            size={20}
            className="sm:size-[24px] md:size-[26px] lg:size-[30px]"
          />
        </motion.span>
      </button>
    </div>
  );
};

export default Welcome;
