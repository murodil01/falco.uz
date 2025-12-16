import { Select, Input, Button } from "antd";
import * as Motion from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const { TextArea } = Input;

const Experience = ({ onContinue, onBack }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[600px] w-full">
      {/* Title */}
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Ko‘nikmalar va tajriba
      </h3>

      {/* Skills Select */}
      <div className="flex flex-col gap-2">
        <h4 className="text-[#000000] text-[16px] font-[500]">
          Qaysi yo‘nalishlar sizning ko‘nikmangiz yoki qiziqishingizga mos
          keladi? (Bir nechta tanlash mumkin)
        </h4>
        <Select
          allowClear
          placeholder="Ko‘nikmalaringiz va qiziqishlaringizni tanlang"
          className="custom-select w-full !h-[35px] !rounded-[10px]"
          options={[
            {
              value: "programming_software_development",
              label: "Programming / Software Development",
            },
            { value: "ai_machine_learning", label: "AI / Machine Learning" },
            { value: "cybersecurity", label: "Cybersecurity" },
            {
              value: "business_entrepreneurship",
              label: "Business / Entrepreneurship",
            },
            { value: "marketing_sales", label: "Marketing / Sales" },
            { value: "sports_athletics", label: "Sports / Athletics" },
            { value: "politics_leadership", label: "Politics / Leadership" },
            { value: "design_multimedia", label: "Design / Multimedia" },
            { value: "teaching_education", label: "Teaching / Education" },
            { value: "public_speaking", label: "Public Speaking" },
            { value: "soft_skills", label: "Soft Skills" },
            { value: "other", label: "Other (write below)" },
          ]}
        />
      </div>

      {/* Experience TextArea */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Tanlagan yo‘nalishlaringiz bo‘yicha tajribangiz yoki yutuqlaringizni
          qisqacha yozing.
        </h3>
        <TextArea placeholder="Javob" rows={4} className="!rounded-[10px]" />
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

export default Experience;
