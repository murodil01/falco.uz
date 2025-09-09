import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    key: "1",
    question: "What is Falco Community?",
    answer:
      "Falco is a growing hybrid community that brings together talented and intelligent individuals across Uzbekistan, aged 15-30, to collaborate, innovate, and grow.",
  },
  {
    key: "2",
    question: "Who can join Falco?",
    answer:
      "Anyone between the ages of 15-30 who is passionate, creative, and eager to solve real-world problems — especially in tech, design, science, and innovation.",
  },
  {
    key: "3",
    question: "What kind of activities does Falco organize?",
    answer:
      "Currently, Falco hosts internal team meetings and project work. In the future, we plan to launch mentorship sessions, workshops, and public events depending on member engagement.",
  },
  {
    key: "4",
    question: "Is Falco free to join?",
    answer:
      "Yes, Falco will be free to join during its initial phase. Our mission is to make opportunity accessible to talented minds.",
  },
  {
    key: "5",
    question: "What's the benefit of joining Falco?",
    answer:
      "You'll connect with other top talents in Uzbekistan, collaborate on meaningful projects, learn from peers, and possibly access future mentorship or startup opportunities.",
  },
  {
    key: "6",
    question: "How do I stay updated with Falco's activities?",
    answer:
      "Follow us on [Instagram/Telegram/etc.] and join our official channels to get updates on events, openings, and new initiatives.",
  },
];

const Answer = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleFaq = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <h3 className="text-3xl md:text-[50px] text-[#09291B] font-[700] mb-10 text-center">
        Frequently asking <span className="text-[#9C8A5D]">questions</span>
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
