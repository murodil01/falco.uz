import logo from "../../assets/images/logo.svg";
import login_bg from "../../assets/login_bg.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Expected = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-6 border-b border-[#22A75D] relative">
        {/* Left icon */}
        <Link to="/">
          <MoveLeft size={30} className="text-[#22A75D] cursor-pointer" />
        </Link>

        {/* Center logo */}
        <img
          src={logo}
          alt="Logo"
          className="absolute left-1/2 transform -translate-x-1/2 w-[218px] h-[60px]"
        />
      </div>
      {/* Content */}
      <div
        className="w-full h-screen bg-no-repeat bg-left-bottom bg-contain"
        style={{ backgroundImage: `url(${login_bg})` }}
      >
        <div
          className="max-w-[860px] w-full min-h-[600px] mx-auto px-8 py-8 flex flex-col items-center gap-12 justify-center bg-white/20 mt-12"
          style={{
            border: "0.95px solid #EFF0F6",
            backdropFilter: "blur(9.52px)",
            borderRadius: "22px",
          }}
        >
          <h3 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kutilayotgan tanlovlar bo‘limi tez orada ishga tushadi
          </h3>

          <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-xl">
            Hozircha ushbu bo‘lim ishlab chiqilmoqda. Ushbu funksiyani hayotga
            tatbiq etish ustida ishlayotganimizda sabr-toqat bilan kutganingiz
            uchun minnatdormiz.
          </p>

          <DotLottieReact
            src="https://lottie.host/490acce8-7833-4e33-b3f2-9903dc15fb15/rVridJRK6u.lottie"
            loop
            autoplay
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Expected;

// import Navbar from "../../components/navbar";
// import ExpectedHero from "../../components/expected/expected-hero";
// import Contact from "../../components/contact";
// import Footer from "../../components/footer";
// import FloatingMenu from "../../components/floating-menu"

// const Expected = () => {
//   return (
//     <div>
//       <Navbar />
//       <ExpectedHero />
//       <Contact />
//       <Footer />
//       <FloatingMenu />
//     </div>
//   );
// };

// export default Expected;
