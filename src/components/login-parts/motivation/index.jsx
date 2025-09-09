import { Button, Input } from "antd";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const { TextArea } = Input;

const Motivation = ({ onContinue }) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h3 className="text-[#313131] text-[22px] font-[600]">Motivatsiya va ishtirok</h3>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Why should we select you over other applicants?
        </h3>
        <TextArea placeholder="Your answer" rows={4} className="!rounded-lg" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          What role do you usually play in a team? (Leader, strategist,
          executor, creative, etc.)
        </h3>
        <TextArea placeholder="Your answer" rows={4} className="!rounded-lg" />
      </div>

      {/* Continue button */}
      <Button
        onClick={onContinue}
        className="w-full !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500]"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        Continue
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ArrowRight size={30} />
        </motion.span>
      </Button>
    </div>
  );
};

export default Motivation;
