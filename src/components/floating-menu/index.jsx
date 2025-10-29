import { useState } from "react";
import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube, IoMdChatboxes } from "react-icons/io";
import { Headset, X } from "lucide-react";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed flex flex-col items-end gap-3 z-5000 bottom-8 right-8">
      <div className="flex flex-col items-center z-50">
        {/* Social / Chat Icons */}
        <div className="flex flex-col items-center gap-3 mb-4">
          {["youtube", "telegram", "instagram", "phone", "chat"].map(
            (item, index) => {
              const hrefs = {
                youtube: "https://www.youtube.com/@AlgoSchool",
                telegram: "https://t.me/AlgoSchoolHelp",
                instagram:
                  "https://www.instagram.com/algoschool.uz?igsh=MW50Y3ZocGN0MmZ1Mg==",
                phone: "tel:+998908086383",
                chat: "#faq",
              };
              const colors = {
                youtube: "bg-[#B91C1C] hover:bg-[#E02424]",
                telegram: "bg-blue-500 hover:bg-blue-600",
                instagram: "bg-pink-500 hover:bg-pink-600",
                phone: "bg-green-500 hover:bg-green-600",
                chat: "bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] hover:opacity-90",
              };
              const Icons = {
                youtube: IoLogoYoutube,
                telegram: FaTelegramPlane,
                instagram: FaInstagram,
                phone: FaPhoneAlt,
                chat: IoMdChatboxes,
              };
              const Icon = Icons[item];

              return (
                <a
                  key={item}
                  href={hrefs[item]}
                  target={
                    item === "phone" || item === "chat" ? "_self" : "_blank" // 👈 chat uchun ham _self
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
    }
  `}
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
