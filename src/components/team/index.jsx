import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import teamBg from "../../assets/images/team.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import Bobur1 from "../../assets/Bobur.png";
import Behruz from "../../assets/images/Behruz.png";
import Fozil from "../../assets/Fozil.png";
import murodil from "../../assets/murodil.png"
import Mushtariy from "../../assets/images/Mushtariy.png";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    bg: team1,
    name: "Ruzmamatov Foziljon",
    role: "Company CEO",
    desc: "Junior at Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    telegram: "@Foziljon_Ruzmamatov",
    linkedin: "Not found",
    instagram: "_mr.fozil_",
    image: Fozil,
  },
  {
    id: 2,
    bg: team2,
    name: "Shaxina Rustambekova",
    role: "Social Media Manager",
    desc: "Junior at Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    telegram: "@rushaav",
    linkedin: "Not found",
    instagram: "Not found",
    image: Mushtariy,
  },
  {
    id: 3,
    bg: team1,
    name: "Behruz Nutfillayev",
    role: "AI Expert",
    desc: "Alumnai of Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    telegram: "@bnutfilloyev",
    linkedin: "Not found",
    instagram: "Not found",
    image: Behruz,
  },
  {
    id: 4,
    bg: team2,
    name: "Allayoruv Boburjon",
    role: "Representer",
    desc: "Junior at Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    telegram: "@allayorovbobur21",
    linkedin: "https://www.linkedin.com/in/bobur-allayorov-66b0622a6/",
    instagram: "Not found",
    image: Bobur1,
  },
  {
    id: 5,
    bg: team1,
    name: "Shohruhbek Sobirov",
    role: "Community Manager",
    desc: "Junior at Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    telegram: " @shohruxbek_s",
    linkedin: "Not found",
    instagram: "Not found",
    image: Bobur1,
  },
  {
    id: 6,
    bg: team2,
    name: "Murodil Nurmamatov",
    role: "Web developer",
    desc: "Junior at Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    telegram: " @Murodil_N",
    linkedin: "Not found",
    instagram: "Not found",
    image: murodil,
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
        <h3 className="text-[50px] text-center font-bold text-[#231f20] mt-[220px] max-md:text-[36px]">
          Meet Our <span className="text-[#9c8a5d]">Team</span>
        </h3>

        {/* Custom Navigation Buttons (h3 ostida) */}
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
              spaceBetween: 15
            }, // mobile
            768: { 
              slidesPerView: 2,
              spaceBetween: 20
            }, // tablet
            1024: { 
              slidesPerView: 4,
              spaceBetween: 10
            }, // desktop
          }}
          className="mt-10"
          style={{ overflow: 'hidden', paddingTop: '40px' }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} style={{ overflow: 'visible' }}>
              <div
                className={`team__card p-0 max-w-[270px] w-full mx-auto text-center flex flex-col justify-between relative
                  ${member.id % 2 === 0 ? 'transform -translate-y-10' : ''} 
                `}
                data-aos="fade-up"
                data-aos-delay={member.id * 100}
                style={{ 
                  zIndex: member.id % 2 === 0 ? 10 : 1,
                  overflow: 'visible',
                  height: 'auto'
                }}
              >
                {/* Shape */}
                <div
                  className="bg-shape w-full h-[300px] bg-no-repeat bg-top bg-contain flex items-end justify-center overflow-hidden" 
                  style={{ backgroundImage: `url(${member.bg})` }}
                >
                  <div className="w-[250px] h-[300px]">
                    <svg viewBox="0 0 250 300" className="w-full h-full">
                      <defs>
                        <clipPath
                          id="halfMoonClip"
                          clipPathUnits="userSpaceOnUse"
                        >
                          <path d="M0,0 H250 V220 Q125,300 0,220 Z" />
                        </clipPath>
                        <clipPath
                          id="halfMoonClipReverse"
                          clipPathUnits="userSpaceOnUse"
                        >
                          <path d="M0,0 H250 V296 Q125,275 0,296 Z" />
                        </clipPath>
                      </defs>

                      <image
                        href={member.image}
                        width="250"
                        height="380"
                        transform={
                          member.id === 1 || member.id === 3 || member.id === 5
                            ? "translate(0,40)"
                            : "translate(0,0)"
                        }
                        preserveAspectRatio="xMidYMid slice"
                        clipPath={`url(#${
                          member.id === 1 || member.id === 3 || member.id === 5
                            ? "halfMoonClip"
                            : "halfMoonClipReverse"
                        })`}
                      />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <h3 className="mt-5 min-h-[60px] text-[20px] font-semibold">
                  {member.name}
                </h3>
                <span className="block text-[16px] font-medium text-[#9c8a5d] mb-3">
                  {member.role}
                </span>
                <p className="text-[14px] text-[#555] leading-relaxed mb-4">
                  {member.desc}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={
                      member.telegram !== "Not found"
                        ? `https://t.me/${member.telegram.replace("@", "")}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="team-link w-[42px] h-[42px] rounded-full hover:bg-blue-600 bg-[#313131] text-white flex items-center justify-center transition"
                  >
                    <RiTelegram2Line size={23} />
                  </a>
                  <a
                    href={
                      member.linkedin !== "Not found" ? member.linkedin : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="team-link w-[42px] h-[42px] rounded-full hover:bg-blue-900 bg-[#313131] text-white flex items-center justify-center transition"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href={
                      member.instagram !== "Not found"
                        ? `https://instagram.com/${member.instagram}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="team-link w-[42px] h-[42px] rounded-full hover:bg-pink-500 bg-[#313131] text-white flex items-center justify-center transition"
                  >
                    <FaInstagram size={20} />
                  </a>
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