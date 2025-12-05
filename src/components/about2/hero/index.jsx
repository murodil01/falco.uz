import project_slider from "../../../assets/project_slider.png";
import attend4 from "../../../assets/attended/attend4.jpg";
import about2 from "../../../assets/about2/about2.jpg";

const Hero = () => {
  return (
    <section className="relative py-[80px] mt-30">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10">
        <img
          loading="loader"
          src={project_slider}
          alt="Project Background"
          className="w-full h-[215px] object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6 relative z-10">
        <h3 className="text-4xl text-white md:text-5xl font-[700] mb-[80px] md:mb-[126px] text-center">
          Biz <span className="text-[#E8C777]">Haqimizda</span>
        </h3>

        <div className="flex flex-col-reverse md:flex-row gap-10 items-center ">
          {/* Left text part */}
          <div className="md:w-1/2 space-y-4 min-h-[360px] flex flex-col">
            <h3 className="text-[28px] md:text-[36px] text-[#09291B] font-[600]">
              <span className="text-[#9C8A5D]">Falco</span> o’zi nima?
            </h3>
            <h3 className="text-[16px] md:text-[18px] text-[#231F20] font-[400]">
              Falco — bu shunchaki hamjamiyat emas, balki <br /> o‘zgarishlarga
              olib boruvchi harakatdir.
            </h3>

            <p className="text-[14px] max-w-[480px] md:text-[18px] text-[#231F20] font-[400] mt-[20px] md:mt-[30px] whitespace-pre-line">
              Falco — bu yoshlar salohiyatini ochishga qaratilgan rivojlanish
              platformasi. Bizning hamjamiyatimizda tashabbuskorlar, o‘rganishga
              chanqoq yoshlar va yangi g‘oyalar yaratishga intiluvchilar
              birlashadi. Falco o‘z ishtirokchilariga real loyihalarda
              qatnashish, zamonaviy texnologiyalarni o‘rganish, xalqaro
              tadbirlarda ishtirok etish va mustahkam jamoaning bir qismi
              bo‘lish imkoniyatini taklif qiladi.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-[19.5px]">
              <button
                aria-label="contact"
                className="bg-[#09291B] w-full sm:max-w-[230px] rounded-[40px] py-[14px] text-[16px] font-semibold text-white text-center transition hover:opacity-90"
              >
                Biz bilan bog’laning
              </button>
              <button
                aria-label="join"
                className="bg-[#E3E3E3] w-full sm:max-w-[230px] rounded-[40px] py-[14px] text-[16px] font-semibold text-black text-center transition hover:bg-[#d9d9d9]"
              >
                Bizga qo‘shiling
              </button>
            </div>
          </div>

          {/* Right slider part */}
          <div className="flex flex-col items-center md:w-1/2 gap-4">
            <div className="relative w-full md:relative">
              {/* Main Image */}
              <img
                loading="lazy"
                src={attend4}
                alt="Main Image"
                className="w-full object-cover rounded-[10px] shadow-lg
                 h-[250px] sm:h-[300px] md:h-[350px] md:max-w-[577px]"
              />

              {/* Overlay Image: desktop only as overlay */}
              <img
                loading="lazy"
                src={about2}
                alt="Overlay Image"
                className="hidden md:block absolute bottom-[-15px] left-[-65px] w-[272px] h-auto object-cover rounded-[10px]"
              />
            </div>

            {/* Mobile only: second image stacked */}
            <img
              loading="lazy"
              src={about2}
              alt="Second Image"
              className="block md:hidden w-full h-[250px] sm:h-[300px] object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
