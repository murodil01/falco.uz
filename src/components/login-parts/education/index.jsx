import { Button, Radio, Select, Form, Input } from "antd";
import * as Motion from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const { TextArea } = Input;

const Education = ({ onContinue, onBack, formData, updateFormData, degreeOptions }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    is_student: formData.is_student || false,
    degree_type: formData.degree_type || "",
    degree_desc: formData.degree_desc || "",
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
        // Convert string to boolean
        const isStudent = values.is_student === "yes";
        
        const formattedValues = {
          ...values,
          is_student: isStudent,
        };
        
        updateFormData(formattedValues);
        onContinue(formattedValues);
      })
      .catch(error => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <div className="flex flex-col gap-6 max-w-[600px] w-full">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Ta'lim va faoliyat
      </h3>

      <Form
        form={form}
        layout="vertical"
        initialValues={formValues}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Student bo'lishi */}
          <div>
            <h3 className="text-[#000000] text-[16px] font-[500] mb-2">
              Hozirda talabamisiz?
            </h3>
            <Form.Item
              name="is_student"
              rules={[{ required: true, message: "Iltimos, tanlang" }]}
            >
              <Radio.Group className="!flex !flex-row md:!flex-col gap-4">
                <Radio value="yes">Ha</Radio>
                <Radio value="no">Yo'q</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          {/* Education level */}
          <div>
            <h3 className="text-[#000000] text-[16px] font-[500] mb-2">
              Ta'lim darajangiz
            </h3>
            <div className="w-[250px]">
              <Form.Item
                name="degree_type"
              >
                <Select
                  placeholder="Ta'lim darajasini tanlang"
                  className="custom-select !w-full !h-[40px] !rounded-[10px]"
                  options={degreeOptions}
                />
              </Form.Item>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-4">
          <h3 className="text-[#000000] text-[16px] font-[500] mb-2">
            {formValues.is_student === "yes" 
              ? "Agar ha bo'lsa — o'qiyotgan universitet/maktab va yo'nalishingizni kiriting."
              : "Agar yo'q bo'lsa — hozirgi faoliyatingizni yozing."}
          </h3>
          <Form.Item
            name="degree_desc"
            rules={[
              { required: true, message: "Iltimos, tafsilotlarni kiriting" },
              { min: 1, message: "Kamida 1 belgi" }
            ]}
          >
            <TextArea
              className="!rounded-[10px]"
              placeholder="Sizning javobingiz"
              rows={4}
            />
          </Form.Item>
        </div>

        <div className="flex items-center justify-between gap-5 flex-wrap mt-8">
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

export default Education;