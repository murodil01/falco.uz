import teamBg from "../../assets/images/team.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import person from "../../assets/images/person.png";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  },
  {
    id: 2,
    bg: team2,
    name: "Mushtariybegim Muxammadova",
    role: "Representer",
    desc: "Junior at Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    telegram: "@Mushtariybegim_Otabekovna",
    linkedin: "Not found",
    instagram: "begim_otabekovna",
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
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="team relative z-30 py-24 -mb-60 min-h-[1210px]"
      style={{
        backgroundImage: `url(${teamBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="max-w-[1260px] mx-auto">
        {/* Title */}
        <h3 className="text-[50px] font-bold text-center text-[#231f20] mt-[150px] max-md:text-[36px]">
          Meet Our <span className="text-[#9c8a5d]">Team</span>
        </h3>

        {/* Cards */}
        <div className="container mx-auto mt-16 grid gap-8 grid-cols-[repeat(auto-fit,minmax(270px,1fr))] justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team__card max-w-[300px] w-full text-center flex flex-col"
              data-aos="fade-up"
              data-aos-delay={member.id * 100}
            >
              {/* Shape */}
              <div
                className="bg-shape w-full h-[300px] bg-no-repeat bg-top bg-contain flex items-end justify-center overflow-hidden"
                style={{ backgroundImage: `url(${member.bg})` }}
              >
                <div className="w-[250px] h-[300px]">
                  <svg viewBox="0 0 250 300" className="w-full h-full">
                    <defs>
                      {/* 1 va 3 – pastki qismi ichkariga kesilgan */}
                      <clipPath
                        id="halfMoonClip"
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path d="M0,0 H250 V220 Q125,300 0,220 Z" />
                      </clipPath>

                      {/* 2 va 4 – pastki qismi tashqariga yumaloqroq kesilgan */}
                      <clipPath
                        id="halfMoonClipReverse"
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path d="M0,0 H250 V300 Q125,250 0,300 Z" />
                      </clipPath>
                    </defs>

                    <image
                      href={person}
                      width="250"
                      height="320"
                      y="10"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#${
                        member.id === 1 || member.id === 3
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
              <span className="block text-[16px] font-medium text-[#9c8a5d] mb-2">
                {member.role}
              </span>
              <p className="text-[14px] text-[#555] leading-relaxed mb-4">
                {member.desc}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <div className="team-link w-[42px] h-[42px] rounded-full hover:bg-blue-600 bg-[#313131] text-white flex items-center justify-center text-[17px] transition">
                  <a
                    href={
                      member.telegram !== "Not found"
                        ? `https://t.me/${member.telegram.replace("@", "")}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiTelegram2Line size={23} />
                  </a>
                </div>
                <div className="team-link w-[42px] h-[42px] rounded-full bg-[#313131] hover:bg-blue-900 text-white flex items-center justify-center text-[17px] transition">
                  <a
                    href={
                      member.linkedin !== "Not found" ? member.linkedin : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
                <div className="team-link w-[42px] h-[42px] rounded-full bg-[#313131] hover:bg-pink-500 text-white flex items-center justify-center text-[17px] transition">
                  <a
                    href={
                      member.instagram !== "Not found"
                        ? `https://instagram.com/${member.instagram}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
