import { Button, Input } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as Motion from "framer-motion";

const { TextArea } = Input;

const Option = ({ onContinue, onBack }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[600px] w-full">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Motivatsiya va ishtirok
      </h3>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Nima uchun aynan sizni tanlashimiz kerak?
        </h3>
        <TextArea
          placeholder="Sizning javobingiz"
          rows={4}
          className="!rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Jamoada ko‘proq qaysi rolni egallaysiz? (Lider, strateg, ijrochi,
          kreativ, va hokazo)
        </h3>
        <TextArea
          placeholder="Sizning javobingiz"
          rows={4}
          className="!rounded-lg"
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

export default Option;
