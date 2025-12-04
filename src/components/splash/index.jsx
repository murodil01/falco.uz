import { useEffect, useState } from "react";
import video from "../../assets/video/video.mp4";

const SplashScreen = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-700 flex items-center justify-center ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        src={video}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 w-full max-w-[500px] h-[400px] object-cover -translate-x-1/2 -translate-y-1/2"
      />

      {/* Overlay for better look (optional) */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default SplashScreen;

// import { useEffect, useState } from "react";
// import video from "../../assets/video/video.mp4"

// const SplashScreen = () => {
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setHide(true), 1150);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-full bg-[#09291b] flex items-center justify-center z-[9999] transition-opacity duration-700 ${
//         hide ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       <h1
//         className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text"
//         style={{
//           fontFamily: `"Pragmatica Extended", sans-serif`,
//           backgroundImage: "linear-gradient(to right, #8e7d53, transparent)",
//           backgroundSize: "200% auto",
//           backgroundPosition: "0% 0",
//           animation: "shimmerFade 1.2s ease-in-out forwards",
//         }}
//       >
//         FALCO
//       </h1>

//       <style>
//         {`
//           @keyframes shimmerFade {
//             0% {
//               background-position: -100% 0;
//               opacity: 1;
//             }
//             50% {
//               opacity: 1;
//             }
//             100% {
//               background-position: 100% 0;
//               opacity: 0;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default SplashScreen;
