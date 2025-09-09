import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Information = ({onNext}) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h3 className="text-[#000000] text-[50px] font-[700]">
        Falco Contact <span className="text-[#9C8A5D]">information</span>
      </h3>
      <p className="text-[#313131] text-[20px] font-[400]">
        Whether you have a question, feedback, or an idea — send us a <br /> message.
        Our team will respond quickly.
      </p>

      <button
        onClick={onNext} 
        className="mt-4 w-[360px] flex justify-center items-center gap-2 px-6 py-[22px] font-[500] rounded-[12px] text-[24px] text-white transition-colors"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        Get Started
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ArrowRight size={30} />
        </motion.span>
      </button>
    </div>
  );
};

export default Information;
