import { Button, Select, Form } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as Motion from "framer-motion";
import { useState, useEffect } from "react";

const Time = ({ onContinue, onBack, formData, updateFormData, timeCommitOptions, readyParticipateOptions }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    time_commit: formData.time_commit || "",
    ready_participate: formData.ready_participate || "",
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
        {/* Weekly time commitment */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#000000] text-[16px] font-[500]">
            Haftasiga Falco faoliyatiga qancha vaqt ajrata olasiz?
          </h3>
          <Form.Item
            name="time_commit"
            rules={[
              { required: true, message: "Iltimos, vaqtni tanlang" }
            ]}
          >
            <Select
              placeholder="Vaqtni tanlang"
              className="custom-select w-full !h-[40px] !rounded-[10px]"
              options={timeCommitOptions}
            />
          </Form.Item>
        </div>

        {/* Open to competitions */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#000000] text-[16px] font-[500]">
            Tanlovlar, tadbirlar va real loyihalarda qatnashishga tayyormisiz?
          </h3>
          <Form.Item
            name="ready_participate"
            rules={[
              { required: true, message: "Iltimos, javob bering" }
            ]}
          >
            <Select
              placeholder="Javobni tanlang"
              className="custom-select w-full !h-[40px] !rounded-[10px]"
              options={readyParticipateOptions}
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

export default Time;