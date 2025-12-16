// import { useState } from "react";
// import logo from "../../assets/images/logo.svg";
// import login_bg from "../../assets/login_bg.png";
// import Welcome from "../../components/login-parts/welcome";
// import Documents from "../../components/login-parts/documents";
// import Education from "../../components/login-parts/education";
// import Experience from "../../components/login-parts/experience";
// import Participate from "../../components/login-parts/participate";
// import Motivation from "../../components/login-parts/motivation";
// import Time from "../../components/login-parts/time";
// import Agree from "../../components/login-parts/agree";
// import Submit from "../../components/login-parts/submit";
// import Succes from "../../components/login-parts/succes";

// const JoinUs = () => {
//   const [step, setStep] = useState(1);

//   // Keyingi stepga o'tish
//   const handleNext = () => {
//     setStep((prev) => (prev < 10 ? prev + 1 : prev));
//   };

//   // Oldingi stepga qaytish
//   const handleBack = () => {
//     setStep((prev) => (prev > 1 ? prev - 1 : prev));
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex items-center justify-center p-4 border-b border-[#22A75D]">
//         <img src={logo} alt="Logo" className="w-[218px] h-[60px]" />
//       </div>

//       {/* Content */}
//       <div
//         className="w-full h-screen bg-no-repeat bg-left-bottom bg-contain"
//         style={{ backgroundImage: `url(${login_bg})` }}
//       >
//         <div
//           className="max-w-[860px] w-full min-h-[600px] mx-auto px-8 py-8 flex flex-col items-center gap-12 justify-center bg-white/20 mt-12"
//           style={{
//             border: "0.95px solid #EFF0F6",
//             backdropFilter: "blur(9.52px)",
//             borderRadius: "22px",
//           }}
//         >
//           {/* Progress Line */}
//           {step !== 10 && (
//             <>
//               <div className="max-w-[520px] w-full relative">
//                 <div className="relative flex items-center justify-between">
//                   <div className="absolute top-1/2 left-0 w-full h-[6px] bg-[#EFF0F6] -translate-y-1/2 rounded-full" />

//                   {step >= 3 && (
//                     <div
//                       className="absolute top-1/2 left-0 h-[6px] bg-[#22A75D] -translate-y-1/2 rounded-full transition-all duration-500"
//                       style={{
//                         width: step === 3 ? "33%" : step === 4 ? "66%" : "100%",
//                       }}
//                     />
//                   )}

//                   {[1, 2, 3, 4].map((s) => {
//                     const isActive = step > s;
//                     const isCurrent = step === s;

//                     return (
//                       <div
//                         key={s}
//                         className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors ${
//                           isActive
//                             ? "bg-[#22A75D] border-[#22A75D] text-white"
//                             : isCurrent
//                             ? "bg-white border-[#22A75D] text-[#22A75D]"
//                             : "bg-white border-[#EFF0F6] text-gray-400"
//                         }`}
//                       >
//                         {s}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="bg-[#D9DBE9] w-full max-w-[570px] h-[2px]"></div>
//             </>
//           )}

//           {/* Dynamic Pages */}
//           {step === 1 && <Welcome onContinue={handleNext} />}
//           {step === 2 && <Documents onContinue={handleNext} />}
//           {step === 3 && (
//             <Education onContinue={handleNext} onBack={handleBack} />
//           )}
//           {step === 4 && (
//             <Experience onContinue={handleNext} onBack={handleBack} />
//           )}
//           {step === 5 && (
//             <Participate onContinue={handleNext} onBack={handleBack} />
//           )}
//           {step === 6 && (
//             <Motivation onContinue={handleNext} onBack={handleBack} />
//           )}
//           {step === 7 && <Time onContinue={handleNext} onBack={handleBack} />}
//           {step === 8 && <Agree onContinue={handleNext} onBack={handleBack} />}
//           {step === 9 && <Submit onContinue={handleNext} onBack={handleBack} />}
//           {step === 10 && <Succes />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinUs;

// src/pages/JoinUs.jsx
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import login_bg from "../../assets/login_bg.png";
import Welcome from "../../components/login-parts/welcome";
import Documents from "../../components/login-parts/documents";
import Education from "../../components/login-parts/education";
import Experience from "../../components/login-parts/experience";
import Participate from "../../components/login-parts/participate";
import Motivation from "../../components/login-parts/motivation";
import Time from "../../components/login-parts/time";
import Agree from "../../components/login-parts/agree";
import Submit from "../../components/login-parts/submit";
import Succes from "../../components/login-parts/succes";

const JoinUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Documents qismi
    full_name: "",
    age: null,
    living_place: "",
    phone_number: "",
    tg_username: "",
    
    // Education qismi
    is_student: null,
    degree_type: "",
    degree_desc: "",
    
    // Experience qismi
    skills: [],
    skill_desc: "",
    
    // Participate qismi
    skill_participated: "",
    social_links: "",
    
    // Motivation qismi
    join_team_desc: "",
    join_team_aim: "",
    
    // Time qismi
    time_commit: "",
    ready_participate: "",
    
    // Agree qismi
    team_why_choose: "",
    team_role: "",
    team_failure: "",
    falco_core: null,
    
    // Submit qismi
    share_message: ""
  });

  // Form ma'lumotlarini yangilash
  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  // Keyingi stepga o'tish
  const handleNext = (newData = {}) => {
    if (newData) {
      updateFormData(newData);
    }
    setStep(prev => (prev < 10 ? prev + 1 : prev));
  };

  // Oldingi stepga qaytish
  const handleBack = () => {
    setStep(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-center p-4 border-b border-[#22A75D]">
        <img src={logo} alt="Logo" className="w-[218px] h-[60px]" />
      </div>

      {/* Content */}
      <div
        className="w-full h-screen bg-no-repeat bg-left-bottom bg-contain px-4"
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
          {/* Progress Line */}
          {step !== 10 && (
            <>
              <div className="max-w-[520px] w-full relative">
                <div className="relative flex items-center justify-between">
                  <div className="absolute top-1/2 left-0 w-full h-[6px] bg-[#EFF0F6] -translate-y-1/2 rounded-full" />

                  {step >= 3 && (
                    <div
                      className="absolute top-1/2 left-0 h-[6px] bg-[#22A75D] -translate-y-1/2 rounded-full transition-all duration-500"
                      style={{
                        width: step === 3 ? "33%" : step === 4 ? "66%" : "100%",
                      }}
                    />
                  )}

                  {[1, 2, 3, 4].map((s) => {
                    const isActive = step > s;
                    const isCurrent = step === s;

                    return (
                      <div
                        key={s}
                        className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors ${
                          isActive
                            ? "bg-[#22A75D] border-[#22A75D] text-white"
                            : isCurrent
                            ? "bg-white border-[#22A75D] text-[#22A75D]"
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
          {step === 1 && <Welcome onContinue={() => handleNext()} />}
          {step === 2 && <Documents onContinue={handleNext} formData={formData} />}
          {step === 3 && (
            <Education onContinue={handleNext} onBack={handleBack} formData={formData} />
          )}
          {step === 4 && (
            <Experience onContinue={handleNext} onBack={handleBack} formData={formData} />
          )}
          {step === 5 && (
            <Participate onContinue={handleNext} onBack={handleBack} formData={formData} />
          )}
          {step === 6 && (
            <Motivation onContinue={handleNext} onBack={handleBack} formData={formData} />
          )}
          {step === 7 && <Time onContinue={handleNext} onBack={handleBack} formData={formData} />}
          {step === 8 && <Agree onContinue={handleNext} onBack={handleBack} formData={formData} />}
          {step === 9 && <Submit onContinue={handleNext} onBack={handleBack} formData={formData} updateFormData={updateFormData} />}
          {step === 10 && <Succes formData={formData} />}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;