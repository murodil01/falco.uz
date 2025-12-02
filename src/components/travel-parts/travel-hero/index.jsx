

import { useEffect, useState } from "react";
import { Calendar, MapPin, Search } from "lucide-react";
import { RiPinDistanceFill } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import about_hero from "../../../assets/about_hero.jpg";

// Rasmlar massivini tayyorlab olamiz
const images = [
  "https://wallpapers.com/images/hd/country-summer-empty-forest-road-v8s3zivvc2vgvme1.jpg",
  "https://avatars.mds.yandex.net/i?id=4220730bf88faeaf3ab25a259cc89336_l-8223286-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=54994dc58f2d2d380ba95f30b771a25ec8aa3e06-7284491-images-thumbs&n=13",
  about_hero,
];

const TravelHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // har 5 sekundda almashadi
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-[100px] sm:py-[120px] md:py-[150px] lg:py-[180px] xl:py-[200px] text-[#09291B] mt-30 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-[105px] text-white text-center">
          Travels
        </h3>

        {/* Responsive Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
          {/* Time */}
          <div
            className="bg-white shadow-md w-[300px] md:max-w-[240px] h-20 flex items-center 
             justify-start md:justify-center p-4 md:p-6 rounded-[25px] 
             md:rounded-l-[50px] md:rounded-r-none"
          >
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-[#09291B]" />
              <div className="flex flex-col text-left">
                <h3 className="font-[500] text-[16px] text-[#09291B]">Time</h3>
                <p className="text-[14px] font-[500] text-[#6E7074]">
                  Where are you going?
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div
            className="bg-white shadow-md w-[300px] md:max-w-[240px] h-20 flex items-center 
             justify-start md:justify-center p-4 md:p-6 rounded-[25px] md:rounded-none"
          >
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-[#09291B]" />
              <div className="flex flex-col">
                <h3 className="font-[500] text-[16px] text-[#09291B]">
                  Location
                </h3>
                <p className="text-[14px] font-[500] text-[#6E7074]">
                  Where are you going?
                </p>
              </div>
            </div>
          </div>

          {/* Distance */}
          <div
            className="bg-white shadow-md w-[300px] md:max-w-[240px] h-20 flex items-center 
             justify-start md:justify-center p-4 md:p-6 rounded-[25px] md:rounded-none"
          >
            <div className="flex items-center gap-3">
              <RiPinDistanceFill size={20} className="text-[#09291B]" />
              <div className="flex flex-col">
                <h3 className="font-[500] text-[16px] text-[#09291B]">
                  Distance
                </h3>
                <p className="text-[14px] font-[500] text-[#6E7074]">
                  Distance k/m
                </p>
              </div>
            </div>
          </div>

          {/* Max People */}
          <div
            className="bg-white shadow-md w-[300px] md:max-w-[240px] h-20 flex items-center 
             justify-start md:justify-center p-4 md:p-6 rounded-[25px] md:rounded-none"
          >
            <div className="flex items-center gap-3">
              <SlPeople size={20} className="text-[#09291B]" />
              <div className="flex flex-col">
                <h3 className="font-[500] text-[16px] text-[#09291B]">
                  Max People
                </h3>
                <p className="text-[14px] font-[500] text-[#6E7074]">0</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div
            className="bg-white shadow-md w-[300px] md:max-w-[100px] h-20 flex items-center 
            justify-start md:justify-center p-4 md:p-6 rounded-[25px] md:rounded-r-[50px] md:rounded-l-none"
          >
            <div
              className="flex-shrink-0"
              style={{
                background: `linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)`,
                width: "48px",
                height: "45px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Search size={24} className="text-white" />
            </div>

            {/* faqat mobile da korinadi */}
            <h3 className="block md:hidden text-[#191B21] text-[16px] font-[500] ml-3">
              Search
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelHero;
