import { useState } from "react";
import { Button, Input } from "antd";
import * as Motion from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contactUsService } from "../../../api/contact";

const { TextArea } = Input;

const ContactSubmit = ({ onNext, formData, updateFormData }) => {
  const [message, setMessage] = useState(formData.message || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // Xabar majburiy
    if (!message.trim()) {
      setError("Iltimos, xabaringizni kiriting");
      return;
    }

    const finalFormData = {
      ...formData,
      message: message.trim(),
    };

    const apiData = {
      full_name: finalFormData.fullName,
      tg_username: finalFormData.telegram || null,
      phone_number: finalFormData.phone,
      message: finalFormData.message,
    };

    setLoading(true);
    setError("");

    try {
      await contactUsService.submitContactForm(apiData);

      updateFormData({ message: finalFormData.message });
      onNext();
    } catch {
      setError(
        "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[560px]">
      <h3 className="text-[#313131] text-[22px] font-[600]">Bog'lanish</h3>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#000000] text-[16px] font-[500]">
          Xabarlar (Majburiy)
        </h3>
        <TextArea
          placeholder="Xabaringizni bu yerga yozing"
          rows={4}
          className="!rounded-lg"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (error) setError("");
          }}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      {/* Yuborish tugmasi */}
      <Button
        aria-label="submit"
        onClick={handleSubmit}
        loading={loading}
        disabled={loading || !message.trim()}
        className="w-full max-w-[560px] !h-[50px] !text-white !border-none !rounded-[10px] !text-[16px] !font-[500]"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        {loading ? "YUBORILMOQDA..." : "YUBORISH"}
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
  );
};

export default ContactSubmit;
