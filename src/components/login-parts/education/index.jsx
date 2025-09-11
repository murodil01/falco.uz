import { Button, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Education = ({ onContinue }) => {
  const [isStudent, setIsStudent] = useState(null);
  const [educationLevel, setEducationLevel] = useState(null);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Ta’lim va faoliyat
      </h3>

      <div className="md:flex flex-col items-start gap-8">
        {/* Student bo'lishi */}
        <div>
          <h3 className="text-[#000000] text-[16px] font-[500] mb-2">
            Are you currently a student?
          </h3>
          <Radio.Group
            onChange={(e) => setIsStudent(e.target.value)}
            value={isStudent}
            className="!flex !flex-col gap-4"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </div>

        {/* Education level */}
        <div>
          <h3 className="text-[#000000] text-[16px] font-[500] mb-2">
            What is your highest completed level of education?
          </h3>
          <Select
            value={educationLevel}
            onChange={(value) => setEducationLevel(value)}
            placeholder="Select education level"
            className="custom-select !w-full !h-[40px] !rounded-[10px]"
            options={[
              { value: "highschool", label: "High School" },
              { value: "bachelor", label: "Bachelor's Degree" },
              { value: "master", label: "Master's Degree" },
              { value: "phd", label: "PhD" },
              { value: "other", label: "Other" },
            ]}
          />
        </div>
      </div>

      {/* Explanation */}
      {isStudent === "yes" && (
        <p className="text-[#000] text-[16px] font-[400]">
          If yes → specify your university/school and program.
        </p>
      )}
      {isStudent === "no" && (
        <p className="text-[#000] text-[16px] font-[400]">
          If no → describe your current occupation.
        </p>
      )}

      <TextArea className="!rounded-[10px]" placeholder="Your answer" rows={4} />

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

export default Education;
