import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import teamBg from "../../assets/images/team.png";
import fozil from "../../assets/team/fozil.png";
import gauhar from "../../assets/team/gauhar.png";
import behruz from "../../assets/team/behruz.png";
import bobur from "../../assets/team/bobur.jpg";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Ruzmamatov Foziljon",
    role: "CEO",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: "@Foziljon_Ruzmamatov",
    linkedin: "Not found",
    instagram: "_mr.fozil_",
    image: fozil,
  },

  {
    id: 2,
    name: "Shohruhbek Sobirov",
    role: "Manager",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: " @shohruxbek_s",
    linkedin: "Not found",
    instagram: "Not found",
    image: behruz,
  },
  {
    id: 3,
    name: "Baymatova Gauxar",
    role: "Media Manager",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: "",
    linkedin: "Not found",
    instagram: "Not found",
    image: gauhar,
  },
  {
    id: 4,
    name: "Allayoruv Boburjon",
    role: "Backend Developer",
    desc: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti",
    telegram: "@allayorovbobur21",
    linkedin: "https://www.linkedin.com/in/bobur-allayorov-66b0622a6/",
    instagram: "Not found",
    image: bobur,
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
          loop={true}
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
                    className="w-full max-w-[310px] h-[275px]"
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

                  {/* Social Links */}
                  <div className="flex justify-start gap-3">
                    {/* Telegram */}
                    <a
                      href={
                        member.telegram !== "Not found"
                          ? `https://t.me/${member.telegram.replace("@", "")}`
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[38px] h-[38px] rounded-full bg-white text-[#09291B] hover:bg-blue-500 hover:text-white flex items-center justify-center"
                    >
                      <RiTelegram2Line size={20} />
                    </a>
                    {/* LinkedIn */}
                    <a
                      href={
                        member.linkedin !== "Not found" ? member.linkedin : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[38px] h-[38px] rounded-full bg-white text-[#09291B] hover:bg-blue-600 hover:text-white flex items-center justify-center"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                    {/* Instagram */}
                    <a
                      href={
                        member.instagram !== "Not found"
                          ? `https://instagram.com/${member.instagram}`
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[38px] h-[38px] rounded-full bg-white text-[#09291B] hover:bg-red-500 hover:text-white flex items-center justify-center"
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

/*
<div className="relative w-full h-[270px] overflow-hidden">
  <svg className="absolute inset-0 w-0 h-0">
    <defs>
      <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
        <path d="M0,0.3 C0.3,1 0.7,0 1,0.7 L1,1 L0,1 Z" />
      </clipPath>
    </defs>
  </svg>

  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover"
    style={{ clipPath: "url(#waveClip)" }}
  />
</div>

*/
