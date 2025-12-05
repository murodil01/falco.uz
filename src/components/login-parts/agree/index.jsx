import { Button, Select } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as Motion from "framer-motion";

const Agree = ({ onContinue, onBack }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[600px] w-full">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Motivatsiya va ishtirok
      </h3>

      {/* Weekly time commitment */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Jamoada fikr-mulohaza yoki muvaffaqiyatsizlikka qanday munosabat
          bildirasiz?
        </h3>
        <Select
          placeholder="Javob"
          className="custom-select w-full !h-[40px] !rounded-[10px]"
          options={[
            { value: "5h", label: "5 soatgacha" },
            { value: "10h", label: "5–10 soat" },
            { value: "15h", label: "10–15 soat" },
            { value: "20h", label: "15–20 soat" },
            { value: "20plus", label: "20 soatdan ko‘p" },
          ]}
        />
      </div>

      {/* Open to competitions */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Falco’ning asosiy qadriyatlari — ishonch, o‘sish, sadoqat va
          tashabbusni qo‘llab-quvvatlaysizmi?
        </h3>
        <Select
          placeholder="Ha yoki yo‘qni tanlang"
          className="custom-select w-full !h-[40px] !rounded-[10px]"
          options={[
            { value: "yes", label: "Ha" },
            { value: "no", label: "Yo'q" },
          ]}
        />
      </div>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        {/* Back button */}
        <Button
          onClick={onBack}
          className="flex-1 max-w-[300px] uppercase !h-[50px] !text-[#313131] !bg-[#E1E3E699]/60 !border-none !rounded-[10px] !text-[16px] !font-[500] flex items-center justify-center gap-2"
        >
          <Motion.motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <ArrowLeft size={30} />
          </Motion.motion.span>
          Orqaga
        </Button>

        {/* Continue button */}
        <Button
          onClick={onContinue}
          className="flex-1 max-w-[300px] uppercase !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500] flex items-center justify-center gap-2"
          style={{
            background:
              "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
          }}
        >
          Davom ettirish
          <Motion.motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <ArrowRight size={30} />
          </Motion.motion.span>
        </Button>
      </div>
    </div>
  );
};

export default Agree;
