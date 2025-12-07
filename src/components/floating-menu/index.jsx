import { useState } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { Headset, X } from "lucide-react";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed flex flex-col items-end gap-3 z-5000 bottom-8 right-8">
      <div className="flex flex-col items-center z-50">
        {/* Social / Chat Icons */}
        <div className="flex flex-col items-center gap-3 mb-4">
          {["telegram", "instagram", "linkedin", "phone", "chat"].map(
            (item, index) => {
              const hrefs = {
                telegram: "https://t.me/Falco_uz",
                instagram:
                  "https://www.instagram.com/falco_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                linkedin:
                  "https://www.linkedin.com/company/falco-community/?viewAsMember=true",
                phone: "tel:+998908086383",
                chat: "https://t.me/+ZHiRSzPPGwdlMGEy",
              };
              const colors = {
                telegram: "bg-blue-500 hover:bg-blue-600",
                instagram: "bg-pink-500 hover:bg-pink-600",
                linkedin: "bg-blue-700 hover:bg-blue-800",
                phone: "bg-green-500 hover:bg-green-600",
                chat: "bg-gradient-to-r from-[#09291B] to-[#22A75DE5] hover:opacity-90",
              };
              const Icons = {
                telegram: FaTelegramPlane,
                instagram: FaInstagram,
                linkedin: FaLinkedin,
                phone: FaPhoneAlt,
                chat: IoMdChatboxes,
              };
              const Icon = Icons[item];

              return (
                <a
                  key={item}
                  href={
                    item === "phone"
                      ? "tel:+998908086383"
                      : item === "chat"
                      ? "https://t.me/+ZHiRSzPPGwdlMGEy"
                      : hrefs[item]
                  }
                  target={
                    item === "telegram" || item === "instagram"
                      ? "_blank"
                      : "_self"
                  }
                  rel="noopener noreferrer"
                  aria-label={`Go to ${item}`}
                  title={`Go to ${item}`}
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 
    ${colors[item]} 
    ${
      open
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon size={22} />
                </a>
              );
            }
          )}
        </div>

        {/* Main Floating Button */}
        <div className="relative w-[64px] h-[64px]">
          {/* Tolqin animatsiyasi (faqat open === false bo'lsa) */}
          {!open && (
            <span className="floating_menu_bg absolute inset-0 rounded-full floating_menu_bg opacity-30 animate-ping"></span>
          )}

          <button
            aria-label="FloatingBtn"
            onClick={() => setOpen(!open)}
            className={`cursor-pointer relative w-[64px] h-[64px] flex items-center justify-center rounded-full shadow-lg transition-transform duration-300
              ${open ? "bg-[#F0F0F0]" : "floating_menu_bg text-white"}
            `}
          >
            {open ? <X size={35} /> : <Headset size={35} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
