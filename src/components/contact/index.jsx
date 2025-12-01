import { Mail, MapPin, Phone } from "lucide-react";
import contact from "../../assets/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="contact bg-cover bg-center text-white pt-70 px-4 top-0 min-h-[1000px]"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1260px] mx-auto text-center">
        {/* Title */}
        <h3 className="text-[55px] font-semibold mb-5 max-md:text-[36px] max-sm:text-[28px]">
          Biz bilan bog‘laning
        </h3>
        <p className="max-w-[890px] mx-auto mb-16 text-[20px] leading-relaxed max-md:text-[16px] max-sm:text-[14px]">
          Falco hamjamiyatiga bo‘lgan qiziqishingiz biz uchun juda muhim. Agar
          savolingiz bo‘lsa, taklif bermoqchi bo‘lsangiz yoki qo‘shimcha
          ma’lumot kerak bo‘lsa — biz har doim aloqadamiz. Biz bilan bemalol
          bog‘lanishingiz mumkin, barcha kerakli ma’lumotlar pastda keltirilgan.
        </p>

        {/* Contact info */}
        <div className="contact-info flex justify-between flex-wrap gap-8 mb-16 max-md:flex-col max-md:items-center">
          {/* Location */}
          <div
            className="flex items-center gap-4 w-full max-w-[250px] text-left"
            data-aos="fade-right"
          >
            <MapPin size={30} className="flex-none" />
            <div className="flex flex-col space-y-1 text-left">
              <a
                href="..."
                className="text-white text-[15px] font-medium block"
              >
                108 Amir Temur Avenue
              </a>
              <a
                href="..."
                className="text-white text-[15px] font-medium block"
              >
                Tashkent 100200, Uzbekistan
              </a>
            </div>
          </div>

          {/* Phone */}
          <div
            className="flex items-center gap-4 w-full max-w-[250px] text-left"
            data-aos="fade-up"
          >
            <Phone size={30} className="flex-none" />
            <div className="flex flex-col space-y-1 text-left">
              <a
                href="tel:..."
                className="text-white text-[15px] font-medium block"
              >
                +998 90 808 63 83
              </a>
              <a
                href="tel:..."
                className="text-white text-[15px] font-medium block"
              >
                +998 99 129 26 14
              </a>
            </div>
          </div>

          {/* Email */}
          <div
            className="flex items-center gap-4 w-full max-w-[250px] text-left"
            data-aos="fade-left"
          >
            <Mail size={30} className="flex-none" />
            <div className="flex flex-col space-y-1 text-left">
              <a
                href="mailto:..."
                className="text-white text-[15px] font-medium block"
              >
                hamrayev-2000@mail.ru
              </a>
              <a
                href="mailto:..."
                className="text-white text-[15px] font-medium block"
              >
                fozilruzmamatoz@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div
          className="flex justify-center flex-wrap gap-4"
          data-aos="zoom-in-up"
        >
          <Link
            to={"/contact"}
            className="w-[250px] h-[85px] flex justify-center items-center bg-[#2bffff26] text-white rounded-[17px] text-[28px] font-medium hover:bg-[#9c8a5d] transition max-md:w-[150px] max-md:h-[50px] max-md:text-[16px] max-md:rounded-md max-sm:w-[130px] max-sm:h-[45px] max-sm:text-[14px]"
          >
            Bog'laning
          </Link>
          <Link
            to={"/join-us"}
            className="w-[250px] h-[85px] flex justify-center items-center bg-[#2bffff26] text-white rounded-[17px] text-[28px] font-medium hover:bg-[#9c8a5d] transition max-md:w-[150px] max-md:h-[50px] max-md:text-[16px] max-md:rounded-md max-sm:w-[130px] max-sm:h-[45px] max-sm:text-[14px]"
          >
            Bizga qo'shiling
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
