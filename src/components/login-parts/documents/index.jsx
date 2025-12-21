import { Button, Form, Input, InputNumber } from "antd";
import * as Motion from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Documents = ({ onContinue, formData, updateFormData }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    full_name: formData.full_name || "",
    age: formData.age || "",
    living_place: formData.living_place || "",
    email: formData.email || "",
    phone_number: formData.phone_number || "",
    tg_username: formData.tg_username || "",
  });

  useEffect(() => {
    form.setFieldsValue(formValues);
  }, [formValues, form]);

  const handleChange = (changedValues) => {
    setFormValues((prev) => ({ ...prev, ...changedValues }));
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Telefon raqamni formatlash
        let phoneNumber = values.phone_number;
        if (phoneNumber && !phoneNumber.startsWith("+")) {
          phoneNumber = "+" + phoneNumber.replace(/\D/g, "");
        }

        const formattedValues = {
          ...values,
          phone_number: phoneNumber,
          age: values.age ? parseInt(values.age) : null,
        };

        updateFormData(formattedValues);
        onContinue(formattedValues);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Shaxsiy ma'lumotlar
      </h3>

      <div>
        <Form
          form={form}
          layout="vertical"
          initialValues={formValues}
          onValuesChange={handleChange}
          onFinish={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-5">
            <Form.Item
              label="To'liq ismingiz"
              name="full_name"
              rules={[
                { required: true, message: "Iltimos, ismingizni kiriting" },
                {
                  min: 1,
                  message: "Ism kamida 1 belgidan iborat bo'lishi kerak",
                },
                { max: 255, message: "Ism 255 belgidan oshmasligi kerak" },
              ]}
              labelCol={{
                style: {
                  fontWeight: "500",
                  color: "#000000",
                  fontSize: "16px",
                },
              }}
              className="flex-1"
            >
              <Input
                placeholder="Sizning javobingiz"
                style={{
                  width: "270px",
                  height: "40px",
                  borderRadius: "10px",
                  padding: "0px 10px 5px 10px",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Yoshingiz"
              name="age"
              rules={[
                { required: true, message: "Iltimos, yoshingizni kiriting" },
                {
                  type: "number",
                  min: 14,
                  max: 60,
                  message: "Yosh 14 va 60 oralig'ida bo'lishi kerak",
                },
              ]}
              labelCol={{
                style: {
                  fontWeight: "500",
                  color: "#000000",
                  fontSize: "16px",
                },
              }}
              className="flex-1"
            >
              <InputNumber
                type="number"
                placeholder="Sizning javobingiz"
                style={{
                  width: "270px",
                  height: "40px",
                  borderRadius: "10px",
                  padding: "2px 0 ",
                }}
                controls={false}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <Form.Item
              label="Shahar / Viloyat"
              name="living_place"
              rules={[
                {
                  required: true,
                  message: "Iltimos, yashash joyingizni kiriting",
                },
                { min: 1, message: "Kamida 1 belgi" },
                { max: 255, message: "255 belgidan oshmasligi kerak" },
              ]}
              labelCol={{
                style: {
                  fontWeight: "500",
                  color: "#000000",
                  fontSize: "16px",
                },
              }}
              className="flex-1"
            >
              <Input
                placeholder="Sizning javobingiz"
                style={{ width: "270px", height: "40px", borderRadius: "10px" }}
              />
            </Form.Item>

            <Form.Item
              label="Elektron pochta"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Iltimos, to'g'ri email manzilini kiriting",
                },
                { max: 254, message: "Email 254 belgidan oshmasligi kerak" },
              ]}
              labelCol={{
                style: {
                  fontWeight: "500",
                  color: "#000000",
                  fontSize: "16px",
                },
              }}
              className="flex-1"
            >
              <Input
                placeholder="example@gmail.com"
                style={{ width: "270px", height: "40px", borderRadius: "10px" }}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <Form.Item
              label="Telefon raqam"
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Iltimos, telefon raqamingizni kiriting",
                },
                { min: 1, message: "Kamida 1 belgi" },
                {
                  max: 13,
                  message:
                    "13 belgidan oshmasligi kerak (masalan: +998901234567)",
                },
              ]}
              labelCol={{
                style: {
                  fontWeight: "500",
                  color: "#000000",
                  fontSize: "16px",
                },
              }}
              className="flex-1"
            >
              <Input
                placeholder="+998901234567"
                style={{ width: "270px", height: "40px", borderRadius: "10px" }}
              />
            </Form.Item>

            <Form.Item
              label="Telegram (@username)"
              name="tg_username"
              rules={[
                {
                  required: true,
                  message: "Iltimos, Telegram username kiriting",
                },
                { min: 1, message: "Kamida 1 belgi" },
                { max: 255, message: "255 belgidan oshmasligi kerak" },
              ]}
              labelCol={{
                style: {
                  fontWeight: "500",
                  color: "#000000",
                  fontSize: "16px",
                },
              }}
              className="flex-1"
            >
              <Input
                placeholder="@username"
                style={{ width: "270px", height: "40px", borderRadius: "10px" }}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full uppercase !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500] "
              style={{
                background:
                  "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
                padding: "13px 0",
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
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Documents;
