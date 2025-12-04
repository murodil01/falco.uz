import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="max-w-[1260px] pt-35 lg:pt-25 pb-5 w-full m-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="capitalize text-4xl md:text-[57px] font-bold text-[#231F20] mb-[46px] leading-tight">
            <span className="text-[#8e7d53]">Falco hamjamiyatiga</span> xush
            <span className="text-border"> kelibsiz!</span>
          </h1>
          <p className="text-lg md:text-[18px] font-normal text-[#231F20] mb-[43px] max-w-xl mx-auto md:mx-0 leading-relaxed">
            Falco - bu o‘sish sari tashlangan birinchi qadam.{" "}
            <br className="hidden md:block" /> {/* faqat md va undan kattada */}
            Bu yerda sizni qo‘llaydigan jamoa, o‘rganishga{" "}
            <br className="hidden md:block" /> {/* faqat desktop */}
            undaydigan muhit va kelajagingizni o‘zgartira oladigan{" "}
            <br className="hidden md:block" /> {/* faqat desktop */}
            imkoniyatlar bor. Bu yerda istagingiz kuchga, maqsadingiz natijaga
            aylanadi.
          </p>

          <a
            aria-label="contact"
            href="#contact"
            className="bg-[#09291b]  border-none font-[500] rounded-[40px] text-white w-full max-w-[230px] px-[30px] py-[14px] hover:bg-[#8e7d53] transition duration-300 text-lg"
          >
            Biz bilan bog’laning
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-[280px] md:w-[350px] lg:w-[400px] max-h-[400px] overflow-hidden">
            <img
              src={hero}
              alt="Falco Illustration"
              className="w-full h-auto object-cover bird-auto"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
