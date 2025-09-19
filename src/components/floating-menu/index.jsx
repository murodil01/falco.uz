import { useState } from "react";
import { FaTelegramPlane, FaInstagram, FaPlus } from "react-icons/fa";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-end gap-3 z-50">
      {/* Social Icons faqat open bo‘lganda chiqadi */}
      {open && (
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
          >
            <FaTelegramPlane size={22} />
          </a>
          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
      aria-label="FloatingBtn"
        onClick={() => setOpen(!open)}
        className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg bg-gray-800 transition"
      >
        <FaPlus
          size={24}
          className={`transform transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default FloatingMenu;
