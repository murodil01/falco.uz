import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    key: "1",
    question: "Falco hamjamiyatiga qanday qilib a’zo bo‘lishim mumkin?",
    answer:
      "Falco is a nationwide youth community in Uzbekistan that brings together talented and ambitious individuals aged 15–30. More than just a network, it is a hybrid platform where members collaborate on meaningful projects, exchange knowledge, and develop skills in technology, science, design, and entrepreneurship. Falco is built on innovation, teamwork, and growth — creating an environment where ideas turn into real impact and young people can unlock their full potential.",
  },
  {
    key: "2",
    question: "Falco a’zolari uchun qanday imkoniyatlar mavjud?",
    answer:
      "Falco a’zolari real loyihalarda ishtirok etish, trening va master-klasslarda qatnashish, mentorlar bilan ishlash hamda jamoaviy tajriba orttirish imkoniga ega. Shuningdek, xalqaro tadbirlarda qatnashish, yangi do‘stlar topish, networking qilish va o‘z loyihalarini rivojlantirish uchun keng imkoniyatlar yaratiladi.",
  },
  {
    key: "3",
    question: "A’zo bo‘lish bepulmi yoki qandaydir to‘lovlar bormi?",
    answer:
      "Currently, Falco hosts internal team meetings and project work. In the near future, we plan to launch mentorship sessions, trainings, seminars, and open community events.",
  },
  {
    key: "4",
    question: "Falco tadbirlarida kimlar ishtirok etishi mumkin?",
    answer:
      "Yes! Membership in Falco is completely free — now and in the future — because great opportunities should be accessible to everyone.",
  },
  {
    key: "5",
    question: "Hackathon va boshqa tanlovlarga qanday ro‘yxatdan o‘taman?",
    answer:
      "As a member, you will connect with some of the most talented young people in Uzbekistan, collaborate on impactful projects, learn from one another, and gain access to mentorship and startup opportunities in the future.",
  },
];

const Answer = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleFaq = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <h3 className="capitalize text-3xl md:text-[50px] text-[#09291B] font-[700] mb-10 text-center">
        Falco uchun ko‘p beriladigan{" "}
        <span className="text-[#9C8A5D]">savollar </span>
      </h3>

      <div className="space-y-6 max-w-[1000px] mx-auto">
        {faqData.map((faq) => (
          <div
            key={faq.key}
            className={`rounded-[20px] shadow-md transition-all py-3 duration-300 overflow-hidden ${
              activeKey === faq.key ? "bg-[#F3F2ED]" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggleFaq(faq.key)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-opacity-80 transition-colors duration-200"
            >
              <span className="text-[20px] font-[600] text-[#09291B] pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`flex-shrink-0 transition-transform duration-300 text-[#09291B] ${
                  activeKey === faq.key ? "rotate-180" : ""
                }`}
                size={24}
              />
            </button>

            <div
              className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                activeKey === faq.key
                  ? "max-h-96 pb-5 opacity-100"
                  : "max-h-0 pb-0 opacity-0"
              }`}
            >
              <p className="text-gray-900 text-[18px] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Answer;
