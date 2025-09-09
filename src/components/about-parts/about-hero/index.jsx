import { Calendar, MapPin, Search } from "lucide-react";
import about_hero from "../../../assets/about_hero.jpg";
import { RiPinDistanceFill } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";

const AboutHero = () => {
  return (
    <section className="relative py-[190px] text-[#09291B] mt-30">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={about_hero}
          alt="About Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-[155px] text-white text-center">
          About Us
        </h3>

        <div className="md:px-20 px-0">
          <div className="bg-white shadow-md rounded-[50px] flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4 md:gap-6">
            {/* Time */}
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-[#09291B]" />
              <div className="flex flex-col">
                <h3 className="font-[500] text-[16px] text-[#09291B]">Time</h3>
                <p className="text-[14px] font-[500] text-[#6E7074]">
                  Where are you going?
                </p>
              </div>
            </div>

            <div className="hidden md:block bg-[#DDDDDD] w-[2px] h-8"></div>

            {/* Location */}
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

            <div className="hidden md:block bg-[#DDDDDD] w-[2px] h-8"></div>

            {/* Distance */}
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

            <div className="hidden md:block bg-[#DDDDDD] w-[2px] h-8"></div>

            {/* Max People */}
            <div className="flex items-center gap-3">
              <SlPeople size={20} className="text-[#09291B]" />
              <div className="flex flex-col">
                <h3 className="font-[500] text-[16px] text-[#09291B]">
                  Max People
                </h3>
                <p className="text-[14px] font-[500] text-[#6E7074]">0</p>
              </div>
            </div>

            {/* Search Button */}
            <div
              className="flex-shrink-0"
              style={{
                background: `linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)`,
                border: "3px solid #FFFFFF",
                width: "48px",
                height: "48px",
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
