import statistic1 from "../../../assets/statistic/statistic1.png";
import statistic2 from "../../../assets/statistic/statistic2.png";
import statistic3 from "../../../assets/statistic/statistic3.png";
import statistic4 from "../../../assets/statistic/statistic4.png";

const statistic = [
  {
    id: 1,
    image: statistic1,
    title: (
      <>
        Falco <span className="text-[#9C8A5D]">A’zolari</span>
      </>
    ),
    number: "150+",
  },
  {
    id: 2,
    image: statistic2,
    title: (
      <>
        Jamoa <span className="text-[#9C8A5D]">Loyihalari</span>
      </>
    ),
    number: "5+",
  },
  {
    id: 3,
    image: statistic3,
    title: (
      <>
        Dasturlar Va <span className="text-[#9C8A5D]">Tadbirlar</span>
      </>
    ),
    number: "50+",
  },
  {
    id: 4,
    image: statistic4,
    title: (
      <>
        Jalb qilingan jami <br />{" "}
        <span className="text-[#9C8A5D]">investitsiyalar miqdori</span>
      </>
    ),
    number: "Tez orada",
  },
];

const Statistic = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-[60px]">
      <h3 className="font-bold text-[36px] md:text-[50px] text-center text-[#313131] mb-10">
        Falco <span className="text-[#9C8A5D]">Statistikasi</span>
      </h3>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-7 md:gap-15">
        {statistic.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-4  "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[170px] h-auto object-contain mb-3 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
            />

            <p className="font-semibold h-[70px] text-[20px] md:text-[24px] mb-3.5 whitespace-pre-line">
              {item.title}
            </p>
            <p className="text-[25px] md:text-[38px] text-[#09291B] font-semibold">
              {item.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
