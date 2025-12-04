import * as Motion from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Form, Input, Button } from "antd";

const UserProfile = ({ onNext }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[600px] mx-auto">
      <h3 className="text-[24px] font-[600] text-[#313131] !text-left">Bog'lanish</h3>

      <Form layout="vertical" className="w-full">
        {/* Full Name */}
        <Form.Item
          label={
            <span className="text-[16px] font-[500]">To‘liq ismingiz</span>
          }
          name="fullName"
          rules={[
            { required: true, message: "Iltimos, to‘liq ismingizni kiriting" },
          ]}
          className="flex flex-col"
        >
          <Input
            type="text"
            placeholder="Sizning javobingiz"
            className="w-full h-[44px] px-4 border border-gray-300 !rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </Form.Item>

        {/* Telegram & Phone */}
        <div className="flex flex-col md:flex-row gap-5">
          <Form.Item
            label={
              <span className="text-[16px] font-[500]">
                Telegram @username
              </span>
            }
            name="telegram"
            className="flex flex-col w-full"
          >
            <Input
              placeholder="Sizning javobingiz"
              className="h-[44px] px-4 border border-gray-300 !rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[16px] font-[500]">Telefon raqami</span>
            }
            name="phone"
            className="flex flex-col w-full"
          >
            <Input
              placeholder="Sizning javobingiz"
              className="h-[44px] px-4 border border-gray-300 !rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </Form.Item>
        </div>
      </Form>

      {/* Continue button */}
      <Button
        aria-label="continue"
        onClick={onNext}
        className="w-full uppercase !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500]"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        Davom etish
        <Motion.motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ArrowRight size={30} />
        </Motion.motion.span>
      </Button>
    </div>
  );
};

export default UserProfile;
