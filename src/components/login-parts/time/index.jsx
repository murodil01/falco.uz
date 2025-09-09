import { Button, Select } from "antd";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Time = ({ onContinue }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Motivatsiya va ishtirok
      </h3>

      {/* Weekly time commitment */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          How much time can you commit to Falco weekly?
        </h3>
        <Select
          placeholder="Select one of them"
          className="w-full !h-[40px] !rounded-[10px]"
          options={[
            { value: "5h", label: "Up to 5 hours" },
            { value: "10h", label: "5 – 10 hours" },
            { value: "15h", label: "10 – 15 hours" },
            { value: "20h", label: "15 – 20 hours" },
            { value: "20plus", label: "20+ hours" },
          ]}
        />
      </div>

      {/* Open to competitions */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Are you open to participating in competitions, events, and real-world
          projects?
        </h3>
        <Select
          placeholder="Select one of them"
          className="w-full !h-[40px] !rounded-[10px]"
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "maybe", label: "Maybe, depends on schedule" },
          ]}
        />
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
          <ArrowRight size={28} />
        </motion.span>
      </Button>
    </div>
  );
};

export default Time;
