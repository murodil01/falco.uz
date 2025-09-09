import career_hero from "../../../assets/career_hero.png";
import about_hero from "../../../assets/about_hero.jpg";
import { PiQuotesFill } from "react-icons/pi";
import { Phone } from "lucide-react";

const data = [
  {
    id: 1,
    date: { month: "FEB", day: "12", year: "2025" },
    author: "By Teshavoy",
    title: "Vacancy: Junior Backend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates.",
    phone: "+998 90 506 6065",
    img: about_hero,
  },
  {
    id: 2,
    date: { month: "MAR", day: "05", year: "2025" },
    author: "By Admin",
    title: "Vacancy: Frontend React Developer",
    desc: "Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus.",
    phone: "+998 91 234 5678",
    img: about_hero,
  },
  {
    id: 3,
    date: { month: "APR", day: "20", year: "2025" },
    author: "By HR Team",
    title: "Vacancy: UI/UX Designer",
    desc: "Soluta natus porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    phone: "+998 93 111 2233",
    img: about_hero,
  },
  {
    id: 4,
    date: { month: "MAY", day: "10", year: "2025" },
    author: "By Company",
    title: "Vacancy: Project Manager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum nobis asperiores.",
    phone: "+998 94 998 8877",
    img: about_hero,
  },
];

const CareerHero = () => {
  return (
    <section className="relative py-[80px] mt-30">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10">
        <img
          src={career_hero}
          alt="Project Background"
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6 relative z-10">
        <h3 className="text-[50px] text-white md:text-5xl font-[700] mb-[300px] text-center">
          Career
        </h3>

        <div className="flex flex-col gap-20">
          {data.map((item) => (
            <div key={item.id} className="flex items-start gap-7 md:gap-[30px]">
              {/* Date Section */}
              <div className="flex flex-col gap-[12px] items-center justify-center text-center">
                <p className="text-[#6E7074] text-[16px] md:text-[20px] font-[600]">
                  {item.date.month}
                </p>
                <p className="text-[#313131] text-[14px] md:text-[38px] font-[600]">
                  {item.date.day}
                </p>
                <p className="text-[#313131] text-[12px] md:text-[24px] font-[600]">
                  {item.date.year}
                </p>
              </div>

              {/* Vertical Divider - Hidden on mobile */}
              <div className="bg-[#09291B] w-[4px] h-[430px]"></div>

              <div className="flex flex-col-reverse md:flex-row gap-[30px]">
                {/* Content Section */}
                <div className="flex-1 flex flex-col gap-[21px]">
                  <p className="text-[#000000] text-[14px] md:text-[20px] font-[400] py-[8px] px-[39px] bg-[#E4F3EB] rounded-[20px] w-fit text-center">
                    {item.author}
                  </p>
                  <h3 className="text-[#09291B] text-[15px] md:text-[36px] font-[600]">
                    {item.title}
                  </h3>
                  <p className="text-[#6E7074] text-[12px] md:text-[18px] font-[400]">
                    {item.desc}
                  </p>
                  <PiQuotesFill className="text-[#09291B] w-5 h-5 md:w-10 md:h-10" />
                  <div className="flex items-center gap-[12px]">
                    <Phone className="text-[#09291B] w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-[#313131] text-[14px] md:text-[24px] font-[500]">
                      {item.phone}
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <img
                  className="w-full md:w-[399px] h-[150px] md:h-[372px] rounded-[10px] md:rounded-[26px] object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
