import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import login_bg from "../../assets/login_bg.png";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Information from "../../components/contact-parts/information";
import UserProfile from "../../components/contact-parts/user-profile";
import ContactSubmit from "../../components/contact-parts/contact-submit";
import Succes from "../../components/login-parts/succes";
const ContactUs = () => {
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
          {/* Progress Line → faqat Succes bo'lmagan steplarda chiqadi */}
          {step !== 4 && (
            <>
              <div className="max-w-[520px] w-full relative">
                <div className="relative flex items-center justify-between">
                  {/* Background line */}
                  <div className="absolute top-1/2 left-0 w-full h-[6px] bg-[#EFF0F6] -translate-y-1/2 rounded-full" />

                  {/* Active line */}
                  {step >= 2 && (
                    <div
                      className="absolute top-1/2 left-0 h-[6px] bg-[#22A75D] -translate-y-1/2 rounded-full transition-all duration-500"
                      style={{
                        width:
                          step === 1
                            ? "0%"
                            : step === 2
                            ? "50%"
                            : step === 3
                            ? "100%"
                            : "0%",
                      }}
                    />
                  )}

                  {/* Steps */}
                  {[1, 2, 3].map((s) => {
                    const isActive = step >= s; // ← o'zgartirildi

                    return (
                      <div
                        key={s}
                        onClick={() => setStep(s)}
                        className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors cursor-pointer ${
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

              <div className="bg-[#D9DBE9] w-full max-w-[570px] h-[2px]"></div>
            </>
          )}

          {/* Dynamic Pages */}
          {step === 1 && <Information onNext={() => setStep(2)} />}
          {step === 2 && <UserProfile onNext={() => setStep(3)} />}
          {step === 3 && <ContactSubmit onNext={() => setStep(4)} />}
          {step === 4 && <Succes />}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
