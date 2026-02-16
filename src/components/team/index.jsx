import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import teamBg from "../../assets/images/team.png";
import iskandar from "../../assets/team/iskandar.jpg";
import gauhar from "../../assets/team/gauhar.png";
import behruz from "../../assets/team/behruz.png";
import diyor from "../../assets/team/diyor.jpg";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Shomurodov Iskandar",
    role: "CEO",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: "https://t.me/HamrayevIskandar",
    linkedin: "",
    instagram: "",
    image: iskandar,
  },
  {
    id: 2,
    name: "Shohruhbek Sobirov",
    role: "Manager",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: "https://t.me/shohruxbek_s",
    linkedin:
      "https://www.linkedin.com/in/shohrux-sobirov-07736a32b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FAeNQ%2BYTTOCLZ%2BsrJs%2Bmgw%3D%3D",
    instagram:
      "https://www.instagram.com/shohruxbek.s?igsh=MWUzaXhlNjZoN2Y1cA%3D%3D&utm_source=qr",
    image: behruz,
  },
  {
    id: 3,
    name: "Baymatova Gauxar",
    role: "Media Manager",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: "https://t.me/anime0077BE",
    linkedin:
      "https://www.linkedin.com/in/gauxar-baymatova-357315393?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/lamiaadiana?igsh=cWt3MnFydnV0NHhx",
    image: gauhar,
  },
  {
    id: 4,
    name: "Xodjimetov Diyor",
    role: "Backend Developer",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: null,
    linkedin: null,
    instagram: null,
    image: diyor,
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="team"
      className="team relative z-30 py-24 -mt-80 lg:mt-0 min-h-[1210px]"
      style={{
        backgroundImage: `url(${teamBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="max-w-[1220px] mx-auto px-2">
        {/* Title */}
        <h3 className="capitalize text-[50px] text-center font-bold text-[#231f20] mt-[220px] max-md:text-[36px]">
          Jamoa bilan <span className="text-[#9c8a5d]">tanishish</span>
        </h3>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            className="custom-prev w-10 h-10 rounded-full bg-[#9c8a5d] text-white flex items-center justify-center hover:bg-[#7e6c46] transition"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="custom-next w-10 h-10 rounded-full bg-[#9c8a5d] text-white flex items-center justify-center hover:bg-[#7e6c46] transition"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={teamMembers.length > 4}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mt-10"
          style={{ overflow: "hidden", paddingTop: "40px" }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div
                className={`team__card max-w-[310px] team_text_bg border-2 border-[#9C8A5D] rounded-2xl overflow-hidden w-full mx-auto text-center flex flex-col justify-between relative`}
                data-aos="fade-up"
                data-aos-delay={member.id * 100}
                style={{
                  zIndex: member.id % 2 === 0 ? 10 : 1,
                }}
              >
                {/* Image Container */}
                <div className="w-full h-[275px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full max-w-[310px] h-[275px] object-cover"
                  />
                </div>

                {/* Info Container */}
                <div className="p-6 text-white text-left">
                  <h3 className="text-[18px] font-bold">{member.name}</h3>
                  <span className="block text-[14px] font-medium text-[#EFD593] my-3">
                    {member.role}
                  </span>
                  <p className="text-[13px] text-white/90 leading-relaxed mb-4 line-clamp-3">
                    {member.desc}
                  </p>

                  <div className="flex justify-start gap-3">
                    {/* Telegram */}
                    <a
                      href={member.telegram || "#"}
                      onClick={(e) => !member.telegram && e.preventDefault()}
                      className={`w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center
      ${
        member.telegram
          ? "text-[#09291B] hover:bg-blue-500 hover:text-white"
          : "text-gray-400 opacity-50 cursor-not-allowed"
      }`}
                    >
                      <RiTelegram2Line size={20} />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin || "#"}
                      onClick={(e) => !member.linkedin && e.preventDefault()}
                      className={`w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center
      ${
        member.linkedin
          ? "text-[#09291B] hover:bg-blue-600 hover:text-white"
          : "text-gray-400 opacity-50 cursor-not-allowed"
      }`}
                    >
                      <FaLinkedinIn size={18} />
                    </a>

                    {/* Instagram */}
                    <a
                      href={member.instagram || "#"}
                      onClick={(e) => !member.instagram && e.preventDefault()}
                      className={`w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center
      ${
        member.instagram
          ? "text-[#09291B] hover:bg-red-500 hover:text-white"
          : "text-gray-400 opacity-50 cursor-not-allowed"
      }`}
                    >
                      <FaInstagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
