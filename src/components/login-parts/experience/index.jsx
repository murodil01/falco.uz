import { Select, Input, Button } from "antd";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const { TextArea } = Input;

const Experience = ({ onContinue }) => {
  return (
    <div className="flex flex-col gap-6 ">
      {/* Title */}
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Ko‘nikmalar va tajriba
      </h3>

      {/* Skills Select */}
      <div className="flex flex-col gap-2">
        <h4 className="text-[#000000] text-[16px] font-[500]">
          Which areas best describe your skills or interests?
          <span className="text-gray-500">(Multi-select)</span>
        </h4>
        <Select
          mode="multiple"
          allowClear
          placeholder="Select your skills and interests"
          className="custom-select w-full !h-[40px] !rounded-[10px]"
          options={[
            { value: "frontend", label: "Frontend Development" },
            { value: "backend", label: "Backend Development" },
            { value: "uiux", label: "UI/UX Design" },
            { value: "ml", label: "Machine Learning" },
            { value: "pm", label: "Project Management" },
          ]}
        />
      </div>

      {/* Experience TextArea */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Briefly describe your experience or achievements in the selected
          areas.
        </h3>
        <TextArea
          placeholder="Write your experience here..."
          rows={4}
          className="!rounded-[10px]"
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
          <ArrowRight size={30} />
        </motion.span>
      </Button>
    </div>
  );
};

export default Experience;
