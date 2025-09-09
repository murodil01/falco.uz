import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="max-w-[1260px] pt-35 pb-5 w-full m-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#231F20] mb-[46px] leading-tight">
            Welcome to <span className="text-[#8e7d53]">Falco</span> Community
          </h1>
          <p className="text-lg md:text-xl text-[#231F20] mb-[43px] max-w-xl mx-auto md:mx-0">
            Where passion meets purpose. Together, we learn, grow, and build the
            future. Falco is not just a community — it's your launchpad to
            greatness.
          </p>
          <button className="bg-[#09291b] font-[500] rounded-[40px] text-white w-[230px] py-[14px] hover:bg-[#8e7d53] transition duration-300 text-lg">
            <a href="#contact">Contact us</a>
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-[280px] md:w-[350px] lg:w-[400px] max-h-[400px] overflow-hidden">
            <img
              src={hero}
              alt="Falco Illustration"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
