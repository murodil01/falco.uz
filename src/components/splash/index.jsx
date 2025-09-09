import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1150); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#09291b] flex items-center justify-center z-[9999] transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1
        className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text"
        style={{
          fontFamily: `"Pragmatica Extended", sans-serif`,
          backgroundImage: "linear-gradient(to right, #8e7d53, transparent)",
          backgroundSize: "200% auto",
          backgroundPosition: "0% 0",
          animation: "shimmerFade 1.2s ease-in-out forwards",
        }}
      >
        FALCO
      </h1>

      <style>
        {`
          @keyframes shimmerFade {
            0% {
              background-position: -100% 0;
              opacity: 1;
            }
            50% {
              opacity: 1;
            }
            100% {
              background-position: 100% 0;
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
