import about_bg from "../../assets/about_bg.png";
import about2 from "../../assets/about2.png";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Modal } from "antd";
import { useState } from "react";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="w-full min-h-screen bg-no-repeat -mt-[1.3px]"
        style={{
          backgroundImage: `url(${about_bg})`,
          backgroundSize: "100% 100%", // Eni va balandlik to'liq ekran
          backgroundPosition: "center bottom", // Pastki qismga yopishadi
        }}
      >
        <div className="max-w-[1260px] mx-auto py-20 md:pt-[120px] px-10 relative z-10">
          <h3 className="capitalize text-[#313131] text-center font-bold text-[clamp(20px,5vw,56px)] mb-[100px]">
            Nega aynan <span className="text-[#E8C777]">biz?</span>
          </h3>
          <div className="flex flex-col md:flex-row md:items-start items-center gap-y-10 gap-x-40 ">
            {/* Chap taraf */}
            <div className="text-white flex flex-col gap-[20px]">
              <div className="bg-white py-[8px] rounded-[50px] text-center w-full max-w-[340px]">
                <h3 className="text-[17px] text-[#09291B] italic md:text-[24px] font-[300] capitalize">
                  Falcoga qo'shilish
                </h3>
              </div>

              <h3 className="font-[600] text-[36px]">
                Falco sizning{" "}
                <span className="text-[#E8C777]">
                  rivojlanish maydonchangiz
                </span>
              </h3>

              <p className="text-base md:text-[18px] font-[400] leading-relaxed">
                Falco — bu yoshlar rivojlanishi uchun yaratilgan kuchli
                hamjamiyat. Bu yerda siz nafaqat bilim olasiz, balki uni
                amaliyotda qo‘llab, real loyihalarda ishtirok etasiz, jamoalarda
                ishlaysiz va zamonaviy texnologiyalar bilan tajriba oshirasiz.
              </p>
              <button
                aria-label="Learn More"
                onClick={() => setOpen(true)}
                className="mt-4 w-[310px] flex justify-center items-center gap-2 px-[47px] py-[14px] rounded-[24px] uppercase text-[16px] font-semibold text-white transition-colors cursor-pointer"
                style={{
                  background:
                    "linear-gradient(99.32deg, #191B21 0.56%, rgba(34,167,93,0.9) 59.52%, rgba(25,27,33,0.8) 117.27%)",
                }}
              >
                <span className="flex items-center gap-2">
                  Ko‘proq bilish
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <ChevronRight size={30} />
                  </motion.span>
                </span>
              </button>
            </div>

            {/* O‘ng taraf */}
            <img
              loading="loader"
              src={about2}
              alt="Image"
              className="max-w-[480px] w-full h-auto"
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
      <Modal
        title="Falco haqida"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <p className="text-base md:text-[18px] font-[400] leading-relaxed">
          Falco — bu yoshlar rivojlanishi uchun yaratilgan kuchli hamjamiyat. Bu
          yerda siz nafaqat bilim olasiz, balki uni amaliyotda qo‘llab, real
          loyihalarda ishtirok etasiz, jamoalarda ishlaysiz va zamonaviy
          texnologiyalar bilan tajriba oshirasiz. Falco o‘z ustida ishlaydigan,
          yangilikka intiladigan va global fikrlovchi yoshlarni bir maqsad
          yo‘lida birlashtiradi. Biz har bir ishtirokchining salohiyatini
          ochishga, kuchli taraflarini rivojlantirishga va uning o‘sishiga
          yordam berishga intilamiz. Bu yerda siz mentorlik, treninglar,
          networking, xalqaro tadbirlar va shaxsiy rivojlanish imkoniyatlariga
          ega bo‘lasiz. Falco — bu g‘ayratli yoshlar uchun imkoniyatlar markazi.
          Bu yerda har bir g‘oya qo‘llab-quvvatlanadi, mehnat qadrlanadi va har
          bir qat’iyatli qadam natijaga olib keladi. Falco sizga yo‘l, maqsad va
          ishonch beradi — sizning har bir qadamlaringiz esa kelajagingizga
          qimmatli sarmoyadir.
        </p>
      </Modal>
      ;
    </>
  );
};

export default About;
