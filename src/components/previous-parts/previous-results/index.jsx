import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foodquest from "../../../assets/foodquest.png";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const results = [
  {
    id: 1,
    date: "12.12.2025",
    title: "Falco Hackathon",
    subtitle: "Lorem ipsum dolor sit amet consectetur",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.",
    img: foodquest,
  },
  {
    id: 2,
    date: "15.02.2026",
    title: "TechnoFest",
    subtitle: "Innovatsion startap",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.",
    img: foodquest,
  },
  {
    id: 3,
    date: "20.05.2026",
    title: "AI Challenge",
    subtitle: "Sun’iy intellekt",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.",
    img: foodquest,
  },
  {
    id: 4,
    date: "01.08.2026",
    title: "Robotics Cup",
    subtitle: "Robototexnika",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.",
    img: foodquest,
  },
  {
    id: 5,
    date: "12.10.2026",
    title: "Innovation Day",
    subtitle: "Innovatsion startaplar",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.",
    img: foodquest,
  },
  {
    id: 6,
    date: "15.11.2026",
    title: "Hackathon Pro",
    subtitle: "Sun’iy intellekt",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.",
    img: foodquest,
  },
];

const PreviousResults = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const groupedResults = [];
  for (let i = 0; i < results.length; i += 3) {
    groupedResults.push(results.slice(i, i + 3));
  }

  return (
    <div className="max-w-[1260px] mx-auto px-6 py-12">
      <h3 className="text-[60px] text-[#09291B] font-[700] mb-[100px] text-center">
        Results
      </h3>

      <Slider ref={sliderRef} {...settings}>
        {groupedResults.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            {group.map((item, index) => (
              <div
                key={item.id}
                className={`
            flex flex-col gap-4 md:gap-8 md:items-center mb-20
            md:${index % 2 === 1 ? "flex-row-reverse" : "flex-row"} 
          `}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full md:max-w-[440px] h-auto flex-shrink-0 rounded-[26px]"
                />
                <div className="flex flex-col gap-6 md:gap-[30px]">
                  <div className="flex  gap-2 md:gap-4 items-center">
                    <p className="text-[20px] md:text-[26px] font-[400] text-[#313131] bg-[#F3F2ED] rounded-[20px] py-[6px] px-[20px] md:py-[10px] md:px-[50px]">
                      {item.date}
                    </p>
                    <div className="bg-[#D9D9D9] w-[2px] h-7"></div>
                    <h4 className="text-[24px] md:text-[36px] font-[600] text-[#09291B]">
                      {item.title}
                    </h4>
                  </div>
                  <h3 className="text-[20px] md:text-[28px] font-[600] text-[#09291B]">
                    {item.subtitle}
                  </h3>
                  <p className="text-[14px] md:text-[18px] text-[#6E7074] font-[400]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Slider>

      {/* Prev / Slide number / Next */}
      <div className="flex justify-center items-center gap-6 text-[#09291B] font-semibold">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-[#F1F2F4CC] text-[#09291B] px-3 py-3 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>

        <span>
          {Array.from(
            { length: groupedResults[currentSlide].length },
            (_, i) => (
              <span key={i} className="mx-1">
                {currentSlide * 3 + i + 1}
              </span>
            )
          )}
        </span>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-[#F1F2F4CC] text-[#09291B] px-3 py-3 rounded-full"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PreviousResults;
