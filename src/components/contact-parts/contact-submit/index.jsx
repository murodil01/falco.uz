import { Button, Input } from "antd";
import * as Motion from "framer-motion";
import { ArrowRight } from "lucide-react";

const { TextArea } = Input;

const ContactSubmit = ({ onNext }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[560px]">
      <h3 className="text-[#313131] text-[22px] font-[600]">Bog'lanish</h3>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Xabarlar (Ixtiyoriy)
        </h3>
        <TextArea placeholder="Your answer" rows={4} className="!rounded-lg" />
      </div>

      {/* Submit button */}
      <Button
        aria-label="submit"
        onClick={onNext}
        className="w-full max-w-[560px] !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500]"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        YUBORISH
        <Motion.motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ArrowRight size={28} />
        </Motion.motion.span>
      </Button>
    </div>
  );
};

export default ContactSubmit;
