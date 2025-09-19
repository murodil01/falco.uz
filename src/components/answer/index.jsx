import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    key: "1",
    question: "What is Falco Community?",
    answer:
      "Falco is a nationwide youth community in Uzbekistan that brings together talented and ambitious individuals aged 15–30. More than just a network, it is a hybrid platform where members collaborate on meaningful projects, exchange knowledge, and develop skills in technology, science, design, and entrepreneurship. Falco is built on innovation, teamwork, and growth — creating an environment where ideas turn into real impact and young people can unlock their full potential.",
  },
  {
    key: "2",
    question: "Who can join Falco?",
    answer:
      "Anyone between the ages of 15 and 30 who is creative, proactive, and interested in solving real-world challenges — especially in technology, design, science, and innovation — can join Falco.",
  },
  {
    key: "3",
    question: "What kind of activities does Falco organize?",
    answer:
      "Currently, Falco hosts internal team meetings and project work. In the near future, we plan to launch mentorship sessions, trainings, seminars, and open community events.",
  },
  {
    key: "4",
    question: "Is Falco free to join?",
    answer:
      "Yes! Membership in Falco is completely free — now and in the future — because great opportunities should be accessible to everyone.",
  },
  {
    key: "5",
    question: "What are the benefits of joining",
    answer:
      "As a member, you will connect with some of the most talented young people in Uzbekistan, collaborate on impactful projects, learn from one another, and gain access to mentorship and startup opportunities in the future.",
  },
  {
    key: "6",
    question: "How do I stay updated with Falco's activities?",
    answer:
      "Subscribe to our official channels [Instagram / Telegram and others] to be the first to know about upcoming events, opportunities, and new initiatives.",
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
        Frequently asked <span className="text-[#9C8A5D]">questions</span>
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
