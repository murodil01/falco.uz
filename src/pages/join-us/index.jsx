import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import login_bg from "../../assets/login_bg.png";
import { MoveLeft } from "lucide-react";
import Welcome from "../../components/login-parts/welcome";
import Documents from "../../components/login-parts/documents";
import { Link } from "react-router-dom";
import Education from "../../components/login-parts/education";
import Experience from "../../components/login-parts/experience";
import Participate from "../../components/login-parts/participate";
import Motivation from "../../components/login-parts/motivation";
import Time from "../../components/login-parts/time";
import Agree from "../../components/login-parts/agree";
import Submit from "../../components/login-parts/submit";

const JoinUs = () => {
  const [step, setStep] = useState(1); // 1 - Welcome, 2 - Documents

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#22A75D]">
        <Link className="cursor-pointer" to="/">
          <MoveLeft size={30} className="text-[#22A75D]" />
        </Link>
        <img src={logo} alt="Logo" className="w-[218px] h-[60px]" />
        <div></div>
      </div>

      {/* Content */}
      <div
        className="w-full h-screen bg-no-repeat bg-left-bottom bg-contain"
        style={{ backgroundImage: `url(${login_bg})` }}
      >
        <div
          className="max-w-[860px] w-full h-[600px] mx-auto px-8 py-8 flex flex-col items-center gap-12 justify-center bg-white/20 mt-12"
          style={{
            border: "0.95px solid #EFF0F6",
            backdropFilter: "blur(9.52px)",
            borderRadius: "22px",
          }}
        >
          {/* Progress Line */}
          <div className="w-[520px] border-b border-[#D9DBE9] pb-6 relative">
            <div className="relative flex items-center justify-between">
              {/* Background line */}
              <div className="absolute top-1/2 left-0 w-full h-[6px] bg-[#EFF0F6] -translate-y-1/2 rounded-full" />

              {/* Active line → faqat step > 2 bo'lsa chiziladi */}
              {step > 2 && (
                <div
                  className="absolute top-1/2 left-0 h-[6px] bg-[#22A75D] -translate-y-1/2 rounded-full transition-all"
                  style={{
                    width: step === 3 ? "50%" : step === 4 ? "75%" : "100%", // agar keyinchalik 4-step bo‘lsa
                  }}
                />
              )}

              {/* Steps */}
              {[1, 2, 3, 4].map((s) => {
                const isActive =
                  (step === 2 && s === 1) || // Documents → faqat 1
                  (step > 2 && s < step); // Keyingi step’larda odatiy mantiq

                return (
                  <div
                    key={s}
                    className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                      isActive
                        ? "bg-[#22A75D] border-[#22A75D] text-white"
                        : "bg-white border-[#EFF0F6] text-gray-400"
                    }`}
                  >
                    {s}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Pages */}
          {step === 1 && <Welcome onContinue={() => setStep(2)} />}
          {step === 2 && <Documents onContinue={() => setStep(3)} />}
          {step === 3 && <Education onContinue={() => setStep(4)} />}
          {step === 4 && <Experience onContinue={() => setStep(5)} />}
          {step === 5 && <Participate onContinue={() => setStep(6)} />}
          {step === 6 && <Motivation onContinue={() => setStep(7)} />}
          {step === 7 && <Time onContinue={() => setStep(8)} />}
          {step === 8 && <Agree onContinue={() => setStep(9)} />}
          {step === 9 && <Submit onContinue={() => setStep(10)} />}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
