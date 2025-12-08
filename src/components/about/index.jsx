import about2 from "../../assets/about2.png";
import { ChevronRight } from "lucide-react";
import * as Motion from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="about"
        className="max-w-[1260px] mx-auto py-20 md:pt-[120px] px-10"
      >
        <h3 className="capitalize text-[#313131] text-center font-bold text-[clamp(30px,5vw,56px)] mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]">
          Nega aynan <span className="text-[#E8C777]">biz?</span>
        </h3>
        <div className="flex flex-col-reverse md:flex-row items-center gap-y-10 gap-x-20 ">
          {/* Chap taraf */}
          <div className="text-white flex flex-col gap-[20px] max-w-[580px] w-full ">
            <h3 className="font-[600] text-[36px]">
              Falco sizning{" "}
              <span className="text-[#E8C777]">rivojlanish maydonchangiz</span>
            </h3>

            <p className="text-base md:text-[18px] font-[400] leading-relaxed">
              Siz haqiqiy innovatsiya bilan shug‘ullanishni, jamoa bilan birga
              o‘sishni, o‘z g‘oyalaringizni hayotga tatbiq etishni istaysizmi?
              Unda FALCO — siz qidirgan manzil. Bu yerda imkoniyatlar ko‘p,
              cheklovlar esa kam. Ambitsiyali yoshlar va professional
              mutaxassislar yonma-yon ishlaydi. Bizga qo‘shiling va o‘z
              kelajagingizni biz bilan birga bunyod qiling.
            </p>
            <button
              aria-label="Learn More"
              className="mt-4 w-[250px] flex justify-center items-center gap-2 px-[47px] py-[14px] rounded-[24px] text-[20px] font-semibold text-white transition-colors cursor-pointer"
              style={{
                background:
                  "linear-gradient(99.32deg, #191B21 0.56%, rgba(34,167,93,0.9) 59.52%, rgba(25,27,33,0.8) 117.27%)",
              }}
              onClick={() => navigate("/about")}
            >
              <span className="flex items-center gap-2">
                Batafsil
                <Motion.motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <ChevronRight size={30} />
                </Motion.motion.span>
              </span>
            </button>
          </div>

          {/* O‘ng taraf */}
          <div className="max-w-[480px] w-full h-auto overflow-hidden rounded-2xl">
            <img
              src={about2}
              alt="Image"
              className="w-full h-auto transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Moslashuvchanlik uchun CSS */}
        <style>
          {`
          @media (max-width: 768px) {
            #about {
              background-size: 100% auto; /* Eni to'liq, balandlik moslashadi */
              background-position: center bottom; /* Pastki qismga yopishadi */
              min-height: 100vh; /* To'liq ekran balandligi */
            }
          }
          @media (max-width: 640px) {
            #about {
              background-size: cover; /* Eni va balandlik ekran o'lchamiga moslashadi */
              background-position: center bottom; /* Pastki qismga yopishadi */
              min-height: 100vh; /* To'liq ekran balandligi */
            }
          }
        `}
        </style>
      </section>
      ;
    </>
  );
};

export default About;
