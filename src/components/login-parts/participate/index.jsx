// import { Input, Button } from "antd";
// import * as Motion from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const { TextArea } = Input;

// const Participate = ({ onContinue, onBack }) => {
//   return (
//     <div className="flex flex-col gap-6 !max-w-[600px] w-full">
//       {/* Title */}
//       <h3 className="text-[#313131] text-[22px] font-[600]">
//         Ko‘nikmalar va tajriba
//       </h3>

//       {/* Events / Competitions */}
//       <div className="flex flex-col gap-2">
//         <h3 className="text-[#000000] text-[16px] font-[500] leading-snug">
//           Siz ilgari hech qanday tadbirlarda, musobaqalarda yoki jamoaviy
//           loyihalarda qatnashganmisiz? Iltimos, tafsilotlarni ulashing.
//         </h3>
//         <TextArea
//           placeholder="Ishtirokingiz haqida yozing..."
//           rows={4}
//           className="!rounded-[10px] !h-[90px]"
//         />
//       </div>

//       {/* Portfolio / Links */}
//       <div className="flex flex-col gap-2">
//         <h3 className="text-[#000000] text-[16px] font-[500] leading-snug">
//           Sizda bo'lishi mumkin bo'lgan portfolio, GitHub, LinkedIn yoki ochiq
//           profilni ulashishingiz mumkinmi?
//         </h3>
//         <TextArea
//           placeholder="Kiriting"
//           rows={3}
//           className="!rounded-[10px] !h-[90px]"
//         />
//       </div>

//       <div className="flex items-center justify-between gap-5 flex-wrap">
//         {/* Back button */}
//         <Button
//           onClick={onBack}
//           className="flex-1 max-w-[300px] uppercase !h-[50px] !text-[#313131] !bg-[#E1E3E699]/60 !border-none !rounded-[10px] !text-[16px] !font-[500] flex items-center justify-center gap-2"
//         >
//           <Motion.motion.span
//             animate={{ x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 1 }}
//           >
//             <ArrowLeft size={30} />
//           </Motion.motion.span>
//           Orqaga
//         </Button>

//         {/* Continue button */}
//         <Button
//           onClick={onContinue}
//           className="flex-1 max-w-[300px] uppercase !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500] flex items-center justify-center gap-2"
//           style={{
//             background:
//               "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
//           }}
//         >
//           Davom ettirish
//           <Motion.motion.span
//             animate={{ x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 1 }}
//           >
//             <ArrowRight size={30} />
//           </Motion.motion.span>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Participate;

import { Input, Button, Form } from "antd";
import * as Motion from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const { TextArea } = Input;

const Participate = ({ onContinue, onBack, formData, updateFormData }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    skill_participated: formData.skill_participated || "",
    social_links: formData.social_links || "",
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
    <div className="flex flex-col gap-6 !max-w-[600px] w-full">
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
        {/* Events / Competitions */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#000000] text-[16px] font-[500] leading-snug">
            Siz ilgari hech qanday tadbirlarda, musobaqalarda yoki jamoaviy
            loyihalarda qatnashganmisiz? Iltimos, tafsilotlarni ulashing.
          </h3>
          <Form.Item
            name="skill_participated"
            rules={[
              { required: true, message: "Iltimos, ishtirokingiz haqida yozing" },
              { min: 1, message: "Kamida 1 belgi" }
            ]}
          >
            <TextArea
              placeholder="Ishtirokingiz haqida yozing..."
              rows={4}
              className="!rounded-[10px] !h-[90px]"
            />
          </Form.Item>
        </div>

        {/* Portfolio / Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#000000] text-[16px] font-[500] leading-snug">
            Sizda bo'lishi mumkin bo'lgan portfolio, GitHub, LinkedIn yoki ochiq
            profilni ulashishingiz mumkinmi?
          </h3>
          <Form.Item
            name="social_links"
            rules={[
              { required: true, message: "Iltimos, havolalarni kiriting" },
              { min: 1, message: "Kamida 1 belgi" }
            ]}
          >
            <TextArea
              placeholder="Kiriting"
              rows={3}
              className="!rounded-[10px] !h-[90px]"
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

export default Participate;