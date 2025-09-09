import news_hero from "../../../assets/news_hero.png";
import news_card1 from "../../../assets/news_card1.png";
import news_card2 from "../../../assets/news_card2.png";
import news_card3 from "../../../assets/news_card3.png";
import news_card4 from "../../../assets/news_card4.png";
import news_card5 from "../../../assets/news_card5.png";
import { ChevronRight } from "lucide-react";

const NewsHero = () => {
  return (
    <section className="relative py-[80px] mt-30">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10">
        <img
          src={news_hero}
          alt="Project Background"
          className="w-full h-[250px] object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6 relative z-10">
        <h3 className="text-4xl text-white md:text-5xl font-[700] mb-[150px] text-center">
          Falco <span className="text-[#E8C777]">News</span>
        </h3>

        <div className="flex flex-col gap-12 ">
          {/* 1-qator */}
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex flex-col gap-6 md:w-[400px] w-full">
              <div
                className="w-full h-[300px] md:h-[400px] border-2 border-[#C4C4C4] rounded-[20px] overflow-hidden bg-cover bg-center flex flex-col p-8"
                style={{ backgroundImage: `url(${news_card1})` }}
              >
                <p className="text-center text-[#252F35] text-[12px] font-[500]">
                  SOUND SYSTEMS
                </p>
                <h3 className="text-center text-[#252F35] text-[22px] md:text-[33px] font-[600] px-2">
                  Amazing sound. At your command.
                </h3>
              </div>
              <p className="text-[#6E7074] text-[16px] md:text-[18px] font-[400]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                ipsum nobis asperiores soluta voluptas quas voluptates.
                Molestiae tempora dignissimos, animi praesentium molestias
                perferendis porro expedita delectus. Soluta natus porro.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:flex-1">
              <div
                className="w-full h-[300px] md:h-[400px] border-2 border-[#C4C4C4] rounded-[20px] overflow-hidden bg-cover bg-center flex flex-col p-8"
                style={{ backgroundImage: `url(${news_card2})` }}
              >
                <p className="text-left text-[#252F35] text-[14px] font-[500]">
                  Security Cameras
                </p>
                <h3 className="text-left text-[#252F35] text-[22px] md:text-[33px] font-[600] w-full md:w-[320px] break-words">
                  Bring smart security inside and see what’s happening at home.
                </h3>
              </div>
              <p className="text-[#6E7074] text-[16px] md:text-[18px] font-[400]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                ipsum nobis asperiores soluta voluptas quas voluptates.
                Molestiae tempora dignissimos, animi praesentium molestias
                perferendis porro expedita delectus. Soluta natus porro.
              </p>
            </div>
          </div>

          {/* 2-qator */}
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex flex-col gap-6 md:w-[400px] w-full">
              <img
                className="w-full h-[250px] md:h-auto object-cover rounded-[16px]"
                src={news_card3}
                alt="Image"
              />
              <p className="text-[#6E7074] text-[16px] md:text-[18px] font-[400]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                ipsum nobis asperiores soluta voluptas quas voluptates.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 flex-1">
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                <div
                  className="w-full h-[250px] md:h-[300px] bg-cover bg-center rounded-[16px] flex flex-col justify-center items-center text-center px-4"
                  style={{ backgroundImage: `url(${news_card4})` }}
                >
                  <h3 className="text-white text-[20px] md:text-[28px] font-[600]">
                    Remotely manage all of your connected devices
                  </h3>
                  <span className="text-[#FFFFFF] text-[14px] md:text-[15px] font-[500] flex items-center justify-center gap-2 cursor-pointer mt-2">
                    Explore <ChevronRight size={20} />
                  </span>
                </div>
                <p className="text-[#6E7074] text-[16px] md:text-[18px] font-[400]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full md:w-1/2">
                <div
                  className="w-full h-[250px] md:h-[300px] bg-cover bg-center rounded-[16px] flex items-center justify-center text-center px-4"
                  style={{ backgroundImage: `url(${news_card5})` }}
                >
                  <h3 className="text-white text-[20px] md:text-[28px] font-[600]">
                    Remotely manage all of your connected devices
                  </h3>
                </div>
                <p className="text-[#6E7074] text-[16px] md:text-[18px] font-[400]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
