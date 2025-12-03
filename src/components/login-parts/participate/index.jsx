import { Input, Button } from "antd";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const { TextArea } = Input;

const Participate = ({ onContinue }) => {
  return (
    <div className="flex flex-col gap-6 !max-w-[600px] w-full">
      {/* Title */}
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Ko‘nikmalar va tajriba
      </h3>

      {/* Events / Competitions */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500] leading-snug">
          Siz ilgari hech qanday tadbirlarda, musobaqalarda yoki jamoaviy
          loyihalarda qatnashganmisiz? Iltimos, tafsilotlarni ulashing.
        </h3>
        <TextArea
          placeholder="Ishtirokingiz haqida yozing..."
          rows={4}
          className="!rounded-[10px] !h-[90px]"
        />
      </div>

      {/* Portfolio / Links */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500] leading-snug">
          Sizda bo'lishi mumkin bo'lgan portfolio, GitHub, LinkedIn yoki ochiq
          profilni ulashishingiz mumkinmi?
        </h3>
        <TextArea
          placeholder="Paste your portfolio or profile links here..."
          rows={3}
          className="!rounded-[10px] !h-[90px]"
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

export default Participate;
