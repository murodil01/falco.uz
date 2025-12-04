import { useState } from "react";
import travel from "../../../assets/travel.png";
import { IoNavigate } from "react-icons/io5";
import { ChevronLeft, ChevronRight } from "lucide-react";

const travelCards = [
  {
    img: "https://avatars.mds.yandex.net/i?id=6b0842f987f41fbb9116226b79377dda121ceb3f-16427318-images-thumbs&n=13",
    title: "Paris Adventure",
    countJT: "12",
    daysDesc: "7 Days",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=6b0842f987f41fbb9116226b79377dda121ceb3f-16427318-images-thumbs&n=13",
    title: "Rome Escape",
    countJT: "8",
    daysDesc: "5 Days",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=6b0842f987f41fbb9116226b79377dda121ceb3f-16427318-images-thumbs&n=13",
    title: "Tokyo Highlights",
    countJT: "10",
    daysDesc: "6 Days",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=6b0842f987f41fbb9116226b79377dda121ceb3f-16427318-images-thumbs&n=13",
    title: "New York Journey",
    countJT: "15",
    daysDesc: "8 Days",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=6b0842f987f41fbb9116226b79377dda121ceb3f-16427318-images-thumbs&n=13",
    title: "London Tour",
    countJT: "9",
    daysDesc: "6 Days",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=6b0842f987f41fbb9116226b79377dda121ceb3f-16427318-images-thumbs&n=13",
    title: "Sydney Adventure",
    countJT: "7",
    daysDesc: "5 Days",
  },
];

const Travel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % travelCards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + travelCards.length) % travelCards.length);
  };

  return (
    <section className="relative py-[300px] text-[#09291B]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={travel}
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div> {/* overlay */}
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-8">
        <h3 className="text-4xl md:text-5xl font-bold text-white text-center mb-[80px]">
          Hozirgi <span className="text-[#E8C777]">Sayohatlar</span>
        </h3>

        {/* Mobile Slider */}
        <div className="relative md:hidden">
          {/* Buttons joylashuvi */}
          <div className="flex justify-end mb-5 gap-2">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-full shadow transition ${
                current === 0
                  ? "bg-[#09291B] text-white"
                  : "bg-white/80 text-[#09291B]"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className={`p-2 rounded-full shadow transition ${
                current === travelCards.length - 1
                  ? "bg-[#09291B] text-white"
                  : "bg-white/80 text-[#09291B]"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-[10px] rounded-[10px] shadow-lg w-[360px]">
              <img
                src={travelCards[current].img}
                alt={travelCards[current].title}
                className="w-full rounded-[10px] h-[230px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-[600] text-lg text-[#3D3E48] mb-[22px]">
                  {travelCards[current].title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-[#09291B] text-sm font-[600]">
                    Rp. {travelCards[current].countJT}.jt
                  </p>
                  <p className="flex items-center gap-2 text-[#3D3E48] font-[400]">
                    <IoNavigate size={20} className="text-[#3D3E48]" />
                    {travelCards[current].daysDesc} for trips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {travelCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-[10px] rounded-[10px] shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-[360px] rounded-[10px] h-[230px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-[600] text-lg md:text-xl text-[#3D3E48] mb-[22px]">
                  {card.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-[#09291B] text-sm md:text-base font-[600]">
                    Rp. {card.countJT}.jt
                  </p>
                  <p className="flex items-center gap-2 text-[#3D3E48] font-[400]">
                    <IoNavigate size={20} className="text-[#3D3E48]" />
                    {card.daysDesc} for trips
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Travel;
