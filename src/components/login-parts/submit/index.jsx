import { Button, Input, Form } from "antd";
import * as Motion from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const { TextArea } = Input;

const Submit = ({ onSubmit, onBack, formData, updateFormData, loading }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    share_message: formData.share_message || "",
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
        onSubmit(values);
      })
      .catch(error => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <div className="flex flex-col gap-6 !max-w-[600px] w-full">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Yakuniy
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
            Biz bilan bo'lishmoqchi bo'lgan qo'shimcha fikrlaringiz bormi?
            (Ixtiyoriy)
          </h3>
          <Form.Item
            name="share_message"
            rules={[
              { min: 1, message: "Kamida 1 belgi" }
            ]}
          >
            <TextArea 
              placeholder="Javob" 
              rows={4} 
              className="!rounded-lg" 
            />
          </Form.Item>
        </div>

        {/* Back and Submit buttons */}
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
              <ArrowRight size={30} className="rotate-180" />
            </Motion.motion.span>
            Orqaga
          </Button>

          {/* Submit button */}
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
            className="flex-1 max-w-[300px] uppercase !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500] flex items-center justify-center gap-2"
            style={{
              background:
                "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
            }}
          >
            {loading ? "Yuborilmoqda..." : "YUBORISH"}
            {!loading && (
              <Motion.motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <ArrowRight size={28} />
              </Motion.motion.span>
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Submit;