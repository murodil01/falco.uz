import { Button, Input, Form } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as Motion from "framer-motion";
import { useState, useEffect } from "react";

const { TextArea } = Input;

const Motivation = ({ onContinue, onBack, formData, updateFormData }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    join_team_desc: formData.join_team_desc || "",
    join_team_aim: formData.join_team_aim || "",
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
    <div className="flex flex-col gap-6 !max-w-[600px] !w-full">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Motivatsiya va ishtirok
      </h3>

      <Form
        form={form}
        layout="vertical"
        initialValues={formValues}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-[#000000] text-[16px] font-[500]">
            Nega Falco jamoasiga qo'shilmoqchisiz? (Qisqacha izoh qoldiring)
          </h3>
          <Form.Item
            name="join_team_desc"
            rules={[
              { required: true, message: "Iltimos, javob bering" },
              { min: 1, message: "Kamida 1 belgi" }
            ]}
          >
            <TextArea
              placeholder="Sizning javobingiz"
              rows={4}
              className="!rounded-lg"
            />
          </Form.Item>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#000000] text-[16px] font-[500]">
            Falco a'zosi sifatida qanday natijalarga erishishni maqsad qilgansiz?
          </h3>
          <Form.Item
            name="join_team_aim"
            rules={[
              { required: true, message: "Iltimos, javob bering" },
              { min: 1, message: "Kamida 1 belgi" }
            ]}
          >
            <TextArea
              placeholder="Sizning javobingiz"
              rows={4}
              className="!rounded-lg"
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

export default Motivation;