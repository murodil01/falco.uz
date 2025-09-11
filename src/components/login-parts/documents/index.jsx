import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Documents = ({ onContinue }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[#313131] text-[22px] font-[600]">
        Shaxsiy ma’lumotlar
      </h3>
      <div>
        {/* layout vertical qilib qo‘ydim */}
        <Form layout="vertical">
          <div className="flex flex-col md:flex-row gap-5">
            <Form.Item
              label="Full Name"
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
                placeholder="Your answer"
                style={{ width: "270px", height: "50px", borderRadius: "10px" }}
              />
            </Form.Item>
            <Form.Item
              label="Age"
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
                placeholder="Your answer"
                style={{ width: "270px", height: "50px", borderRadius: "10px" }}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <Form.Item
              label="City / Region"
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
                placeholder="Your answer"
                style={{ width: "270px", height: "50px", borderRadius: "10px" }}
              />
            </Form.Item>
            <Form.Item
              label="Contact Email"
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
                placeholder="Your answer"
                style={{ width: "270px", height: "50px", borderRadius: "10px" }}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <Form.Item
              label="Phone Number"
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
                placeholder="Your answer"
                style={{ width: "270px", height: "50px", borderRadius: "10px" }}
              />
            </Form.Item>
            <Form.Item
              label="Telegram (@username)"
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
                placeholder="Your answer"
                style={{ width: "270px", height: "50px", borderRadius: "10px" }}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              onClick={onContinue}
              className="w-full !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500] "
              style={{
                background:
                  "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
                padding: " 13px 0",
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
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Documents;
