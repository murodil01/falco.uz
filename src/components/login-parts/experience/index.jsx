
import { Select, Input, Button, Form } from "antd";
import * as Motion from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const { TextArea } = Input;

const Experience = ({ onContinue, onBack, formData, updateFormData, skillOptions }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    skills: formData.skills || [],
    skill_desc: formData.skill_desc || "",
  });

  useEffect(() => {
    form.setFieldsValue(formValues);
  }, [formValues, form]);

  const handleChange = (changedValues) => {
    setFormValues(prev => ({ ...prev, ...changedValues }));
  };

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        updateFormData(values);
        onContinue(values);
      })
      .catch(error => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <div className="flex flex-col gap-6 max-w-[600px] w-full">
      {/* Title */}
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Ko'nikmalar va tajriba
      </h3>

      <Form
        form={form}
        layout="vertical"
        initialValues={formValues}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        {/* Skills Select */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[#000000] text-[16px] font-[500]">
            Qaysi yo'nalishlar sizning ko'nikmangiz yoki qiziqishingizga mos
            keladi? (Bir nechta tanlash mumkin)
          </h4>
          <Form.Item
            name="skills"
            rules={[
              { required: true, message: "Iltimos, kamida bitta ko'nikma tanlang" }
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              placeholder="Ko'nikmalaringiz va qiziqishlaringizni tanlang"
              className="custom-select w-full !h-[40px] !rounded-[10px]"
              options={skillOptions}
            />
          </Form.Item>
        </div>

        {/* Experience TextArea */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#000000] text-[16px] font-[500]">
            Tanlagan yo'nalishlaringiz bo'yicha tajribangiz yoki yutuqlaringizni
            qisqacha yozing.
          </h3>
          <Form.Item
            name="skill_desc"
            rules={[
              { required: true, message: "Iltimos, tajribangizni yozing" },
              { min: 1, message: "Kamida 1 belgi" }
            ]}
          >
            <TextArea 
              placeholder="Javob" 
              rows={4} 
              className="!rounded-[10px]" 
            />
          </Form.Item>
        </div>

        <div className="flex items-center justify-between gap-5 flex-wrap">
          {/* Back button */}
          <Button
            type="button"
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
            type="primary"
            htmlType="submit"
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
      </Form>
    </div>
  );
};

export default Experience;