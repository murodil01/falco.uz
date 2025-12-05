import * as Motion from "framer-motion";
import { ArrowRight } from "lucide-react";

const Welcome = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center">
      <h3 className="capitalize text-center text-[#09291B] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[700] leading-tight">
        Falcoga <span className="text-[#9C8A5D]">xush kelibsiz</span>
      </h3>

      <p className="text-left text-[#313131] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[400]">
        <span className="font-semibold">
          FALCO jamoasiga qo‘shilish qoidalari:
        </span>
        <br />
        1.Barcha ma’lumotlarni to‘g‘ri va rostgo‘y tarzda to‘ldiring. <br />
        2.Aloqa uchunn kiritilgan telefon raqam va Telegram username faol
        bo‘lishi shart.
        <br />
        3.Tajriba va yutuqlarni aniq va qisqa yozing. <br />
        4.Portfolio, GitHub yokiLinkedIn havolalari mavjud bo‘lsa, iloji boricha
        kiriting. <br />
        5.So‘rovnoma yakunida ma’lumotlaringiz tekshiruvdan o‘tkazilishi mumkin.
        <br />
        6.Soxta,noto‘g‘ri yoki yolg‘on ma’lumotlar aniqlansa, ariza bekor
        qilinadi.
        <br /> 7.FALCO jamoasi faqat faol, intizomli va rivojlanishga tayyor
        yoshlarnigina qabul qiladi.
      </p>
      <button
        onClick={onContinue}
        className="mt-4 w-[200px] sm:w-[280px] md:w-[300px] lg:w-[360px] uppercase
             flex justify-center items-center gap-2 
             px-4 sm:px-5 md:px-6 
             py-3 sm:py-4 md:py-5 lg:py-[22px] 
             font-[500] rounded-[10px] md:rounded-[12px] 
             text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] 
             !text-white transition-colors"
        style={{
          background:
            "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
        }}
      >
        Boshlash
        <Motion.motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ArrowRight
            size={20}
            className="sm:size-[24px] md:size-[26px] lg:size-[30px]"
          />
        </Motion.motion.span>
      </button>
    </div>
  );
};

export default Welcome;
