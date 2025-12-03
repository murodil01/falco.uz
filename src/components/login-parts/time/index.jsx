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
          Haftasiga Falco faoliyatiga qancha vaqt ajrata olasiz?
        </h3>
        <Select
          placeholder="Ulardan birini tanlang"
          className="custom-select w-full !h-[40px] !rounded-[10px]"
          options={[
            { value: "6_8_hours_per_week", label: "6-8 soat/hafta" },
            { value: "10_15_hours_per_week", label: "10-15 soat/hafta" },
            { value: "15_20_hours_per_week", label: "15-20 soat/hafta" },
          ]}
        />
      </div>

      {/* Open to competitions */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Tanlovlar, tadbirlar va real loyihalarda qatnashishga tayyormisiz?
        </h3>
        <Select
          placeholder="Ulardan birini tanlang"
          className="custom-select w-full !h-[40px] !rounded-[10px]"
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
        Davom ettirish
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
