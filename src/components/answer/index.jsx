import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    key: "1",
    question: "Falco hamjamiyatiga qanday qilib a’zo bo‘lishim mumkin?",
    answer:
      " Falco hamjamiyatiga qo‘shilish juda oson. Siz ro‘yxatdan o‘tish shaklini to‘ldirasiz, qisqa suhbatdan o‘tasiz va faoliyat yo‘nalishingizga qarab jamoaga qo‘shilasiz. A’zolik barcha yoshlar uchun ochiq va bepul.",
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
      "Falco hamjamiyatiga a’zo bo‘lish mutlaqo bepul. Falco yoshlarning rivojlanishi uchun ochiq va tekin platformadir.",
  },
  {
    key: "4",
    question: "Falco tadbirlarida kimlar ishtirok etishi mumkin?",
    answer:
      "Falco tadbirlarida yoshlar, talabalar, IT, biznes yoki innovatsiya yo‘nalishiga qiziqqan har qanday ishtirokchi qatnashishi mumkin. Tadbirlar ochiq formatda o‘tkaziladi va yosh chegarasi yo‘q.",
  },
  {
    key: "5",
    question:
      "Falco qaysi yo‘nalishlarda trening va master-klasslar o‘tkazadi?",
    answer:
      "Falco IT, dizayn, biznes, liderlik, soft skills, kommunikatsiya, startap boshqaruvi, innovatsiya va shaxsiy rivojlanish yo‘nalishlarida treninglar o‘tkazadi. Mavzular hamjamiyat ehtiyojiga qarab muntazam yangilanadi.",
  },
  {
    key: "6",
    question: "Hackathon va boshqa tanlovlarga qanday ro‘yxatdan o‘taman?",
    answer:
      "Har bir hackathon yoki tanlov e’lon qilinganda rasmiy ro‘yxatdan o‘tish havolasi beriladi. Siz havola orqali anketa to‘ldirasiz va tasdiqdan so‘ng ishtirokchi sifatida ro‘yxatga olinasiz.",
  },
  {
    key: "7",
    question: "Falco’da loyiha yaratsam, uni qo‘llab-quvvatlashadimi?",
    answer:
      "Albatta, Falco o‘z a’zolarining loyihalarini qo‘llab-quvvatlaydi. Jamoa mentoring, maslahat, jamoa tuzishda yordam, marketing va texnik ko‘mak orqali loyihalarni rivojlantirishga yordam beradi.",
  },
  {
    key: "8",
    question: "Jamoaga qo‘shilish uchun dasturlash yoki texnik bilim shartmi?",
    answer:
      "Yo‘q, shart emas. Falco ko‘plab yo‘nalishlarni qamrab oladi: IT, dizayn, marketing, tadbirlar boshqaruvi, kontent yaratish va boshqalar. Siz qaysi yo‘nalishda o‘zingizni sinab ko‘rmoqchi bo‘lsangiz, shu bo‘yicha qo‘shilishingiz mumkin.",
  },
  {
    key: "9",
    question:
      "Falco loyihalarida ishtirok etish orqali qanday ko‘nikmalarni rivojlantiraman?",
    answer:
      "Siz jamoada ishlash, liderlik, kommunikatsiya, kreativ fikrlash, muammolarni hal qilish, vaqtni boshqarish, texnologiya bilan ishlash va real loyihalar yaratish bo‘yicha kuchli amaliy ko‘nikmalarga ega bo‘lasiz.",
  },
  {
    key: "10",
    question: "Falco’da volontyor sifatida ishlasa bo‘ladimi?",
    answer:
      "Albatta. Falco’da tadbirlar, loyihalar va tashkiliy jarayonlarda volontyor sifatida ishtirok etish imkoniyati mavjud. Bu sizga katta tajriba va networking beradi.",
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
        Ko‘p beriladigan <span className="text-[#9C8A5D]">savollar </span>
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
              aria-label="faq"
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
