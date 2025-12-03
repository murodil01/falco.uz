import { Button, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Education = ({ onContinue }) => {
  const [isStudent, setIsStudent] = useState(null);
  const [educationLevel, setEducationLevel] = useState(null);

  return (
    <div className="flex flex-col gap-6 max-w-[500px] w-full">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Ta’lim va faoliyat
      </h3>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 ">
        {/* Student bo'lishi */}
        <div>
          <h3 className="text-[#000000] text-[16px] font-[500] mb-2">
            Hozirda talabamisiz?
          </h3>
          <Radio.Group
            onChange={(e) => setIsStudent(e.target.value)}
            value={isStudent}
            className="!flex !flex-row md:!flex-col gap-4"
          >
            <Radio value="yes">Ha</Radio>
            <Radio value="no">Yo'q</Radio>
          </Radio.Group>
        </div>

        {/* Education level */}
        <div>
          <h3 className="text-[#000000] text-[16px] font-[500] mb-2">
            Ta’lim darajangiz
          </h3>
          <div className="w-[250px]">
            <Select
              value={educationLevel}
              onChange={(value) => setEducationLevel(value)}
              placeholder="Ta’lim darajasini tanlang"
              className="custom-select !w-full !h-[40px] !rounded-[10px]"
              options={[
                { value: "highschool", label: "O‘rta ta’lim " },
                { value: "bachelor", label: "Litsey / Kolledj" },
                { value: "master", label: "Bakalavr" },
                { value: "phd", label: "Magistratura" },
                { value: "doctarantura", label: "Doktorantura" },
                { value: "other", label: "Boshqa" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Explanation */}
      {isStudent === "yes" && (
        <p className="text-[#000] text-[16px] font-[400]">
          Agar ha bo‘lsa — o‘qiyotgan universitet/maktab va yo‘nalishingizni
          kiriting.
        </p>
      )}
      {isStudent === "no" && (
        <p className="text-[#000] text-[16px] font-[400]">
          Agar yo‘q bo‘lsa — hozirgi faoliyatingizni yozing.
        </p>
      )}

      <TextArea
        className="!rounded-[10px]"
        placeholder="Sizning javobingiz"
        rows={4}
      />

      {/* Continue button */}
      <Button
        onClick={onContinue}
        className="w-full !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500]"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        Davom etish
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
