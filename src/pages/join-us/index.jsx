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
import Option from "../../components/login-parts/option";
import { joinUsService } from "../../api/join";
import { message } from "antd";

const JoinUs = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Documents qismi
    full_name: "",
    age: null,
    living_place: "",
    phone_number: "",
    tg_username: "",
    email: "",

    // Education qismi
    is_student: false,
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

    // Option qismi
    team_why_choose: "",
    team_role: "",

    // Time qismi
    time_commit: "",
    ready_participate: "",

    // Agree qismi
    team_failure: "",
    falco_core: false,

    // Submit qismi
    share_message: "",
  });

  // Form ma'lumotlarini yangilash
  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  // Keyingi stepga o'tish
  const handleNext = (newData = {}) => {
    if (Object.keys(newData).length > 0) {
      updateFormData(newData);
    }
    setStep((prev) => (prev < 11 ? prev + 1 : prev));
  };

  // Oldingi stepga qaytish
  const handleBack = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Formni yuborish
  const handleSubmit = async (finalData = {}) => {
    try {
      setLoading(true);

      // So'nggi ma'lumotlarni qo'shish
      const completeData = { ...formData, ...finalData };

      // Bo'sh maydonlarni null ga o'tkazish
      const dataToSend = Object.fromEntries(
        Object.entries(completeData).map(([key, value]) => [
          key,
          value === "" ? null : value,
        ])
      );

      console.log("Submitting data:", dataToSend);

      const response = await joinUsService.submitJoinForm(dataToSend);

      if (response) {
        message.success("Arizangiz muvaffaqiyatli yuborildi!");
        setStep(11);
      }
    } catch (error) {
      message.error(
        error.message || "Xatolik yuz berdi. Qayta urinib ko'ring."
      );
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Skills mapping
  const skillOptions = [
    { value: 1, label: "Programming / Software Development" },
    { value: 2, label: "AI / Machine Learning" },
    { value: 3, label: "Cybersecurity" },
    { value: 4, label: "Business / Entrepreneurship" },
    { value: 5, label: "Marketing / Sales" },
    { value: 6, label: "Sports / Athletics" },
    { value: 7, label: "Politics / Leadership" },
    { value: 8, label: "Design / Multimedia" },
    { value: 9, label: "Teaching / Education" },
    { value: 10, label: "Public Speaking" },
    { value: 11, label: "Soft Skills" },
    { value: 12, label: "Other" },
  ];

  const degreeOptions = [
    { value: "bachelor", label: "Bakalavr" },
    { value: "master", label: "Master" },
    { value: "phd", label: "PHD" },
    { value: "other", label: "Boshqa" },
  ];

  const timeCommitOptions = [
    { value: "less_5", label: "5 soatgacha" },
    { value: "5_10", label: "5-10 soat" },
    { value: "10_20", label: "10-20 soat" },
    { value: "more_20", label: "20 soatdan ko'p" },
    { value: "full_time", label: "To'liq vaqt" },
  ];

  const readyParticipateOptions = [
    { value: "yes", label: "Ha" },
    { value: "no", label: "Yo'q" },
    { value: "maybe", label: "Ehtimol, jadvalga bog‘liq" },
  ];

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
          {step !== 11 && (
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
          {step === 2 && (
            <Documents
              onContinue={handleNext}
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {step === 3 && (
            <Education
              onContinue={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
              degreeOptions={degreeOptions}
            />
          )}
          {step === 4 && (
            <Experience
              onContinue={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
              skillOptions={skillOptions}
            />
          )}
          {step === 5 && (
            <Participate
              onContinue={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {step === 6 && (
            <Motivation
              onContinue={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {step === 7 && (
            <Option
              onContinue={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {step === 8 && (
            <Time
              onContinue={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
              timeCommitOptions={timeCommitOptions}
              readyParticipateOptions={readyParticipateOptions}
            />
          )}
          {step === 9 && (
            <Agree
              onContinue={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {step === 10 && (
            <Submit
              onSubmit={handleSubmit}
              onBack={handleBack}
              formData={formData}
              updateFormData={updateFormData}
              loading={loading}
            />
          )}
          {step === 11 && <Succes formData={formData} />}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
