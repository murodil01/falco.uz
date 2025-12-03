import { Button, Input } from "antd";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const Submit = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(); 
    }
    navigate("/"); // ✅ home sahifaga yo‘naltirish
  };

  return (
    <div className="flex flex-col gap-6 !max-w-[500px] w-full">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Motivatsiya va ishtirok
      </h3>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Biz bilan bo‘lishmoqchi bo‘lgan qo‘shimcha fikrlaringiz bormi? (Ixtiyoriy)
        </h3>
        <TextArea placeholder="Javob" rows={4} className="!rounded-lg" />
      </div>

      {/* Submit button */}
      <Button
        onClick={handleSubmit}
        className="w-full !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500]"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        YUBORISH
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

export default Submit;
