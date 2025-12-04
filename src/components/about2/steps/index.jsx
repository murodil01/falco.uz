import steps_bg from "../../../assets/steps/steps_bg.png";
import steps_bg2 from "../../../assets/steps/steps_bg2.png";

const stepsText = [
  {
    id: 1,
    title: "Boshlanish",
    description: "Falco safarining ilk qadami — g‘oya va maqsadni belgilash.",
  },
  {
    id: 2,
    title: "O‘sish",
    description:
      "Loyihalar, jamoaviy ish va tajriba orqali salohiyatni kengaytirish bosqichi.",
  },
  {
    id: 3,
    title: "Natija",
    description:
      "O‘rganilgan ko‘nikmalarni amalda qo‘llab, yutuqlar va loyihalarni hayotga tatbiq etish.",
  },
];

const Steps = () => {
  return (
    <section
      className="relative bg-no-repeat bg-right bg-contain hidden lg:block"
      style={{
        backgroundImage: `url(${steps_bg2})`,
        backgroundPosition: "right center",
        backgroundSize: "22%",
      }}
    >
      <div className="relative max-w-[1260px] mx-auto w-full overflow-hidden py-[100px] px-4">
        {/* BACKGROUND IMAGES (Only Desktop) */}
        <img
          src={steps_bg}
          className="hidden lg:block absolute max-w-[1100px] top-[400px] left-[530px] -translate-x-1/2 z-0"
          alt="bg"
        />

        <div className="relative z-10">
          {/* TITLE */}
          <h3 className="text-center capitalize font-bold text-[36px] lg:text-[50px] text-[#09291B]">
            Falco <span className="text-[#9C8A5D]">bosqichlari</span>
          </h3>

          {/* DESCRIPTION */}
          <div className="mt-[60px]">
            <h3 className="text-[#09291B] font-bold text-[28px] lg:text-[36px] mt-3">
              Har bir qadam — sizning rivojlanish tarixingiz
            </h3>

            <p className="text-[#231F20]/80 text-[16px] lg:text-[18px] mt-6 max-w-[580px]">
              Falcoda yo‘l boshlanishdan natijagacha aniq belgilangan. Siz
              boshlang‘ich bosqichda qo‘llab-quvvatlanasiz, o‘sish jarayonida
              tajriba orttirasiz va natija bosqichida o‘zingizning haqiqiy
              yutuqlaringizni yaratishingiz mumkin.
            </p>

            {/* STEPS */}
            <div className="mt-[80px]">
              {/* DESKTOP ABSOLUTE */}
              <div className="hidden lg:block relative w-full h-[350px]">
                <div className="absolute left-[140px] top-[260px]">
                  {desktopStep(stepsText[0], 1)}
                </div>

                <div className="absolute left-[750px] top-[120px] -translate-x-1/2">
                  {desktopStep(stepsText[1], 2)}
                </div>

                <div className="absolute right-[40px] top-[-130px]">
                  {desktopStep(stepsText[2], 3)}
                </div>

                <h3 className="absolute left-[270px] top-[155px] text-black/10 font-[900] text-[204px]">
                  1
                </h3>
                <h3 className="absolute left-[780px] top-[15px] text-black/10 font-[900] text-[204px]">
                  2
                </h3>
                <h3 className="absolute right-0 -top-[250px] text-black/10 font-[900] text-[204px]">
                  3
                </h3>
              </div>

              {/* MOBILE STACK */}
              <div className="grid grid-cols-1 gap-10 lg:hidden">
                {stepsText.map((item, i) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-lg rounded-xl p-6 relative"
                  >
                    <span className="absolute right-4 top-3 text-black/5 font-black text-[64px]">
                      {i + 1}
                    </span>

                    <div className="w-[60px] h-[60px] bg-white shadow-md rounded-full flex items-center justify-center mb-4">
                      <div className="w-[22px] h-[22px] bg-[#C4C4C4] rounded-full"></div>
                    </div>

                    <h3 className="font-bold text-[22px] text-[#09291B]">
                      {item.title}
                    </h3>

                    <p className="text-[#64607D] text-[15px] mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

/* Desktop Step Component */
function desktopStep(item) {
  return (
    <div>
      <div className="w-[64px] h-[64px] bg-white shadow-md rounded-full flex items-center justify-center mb-6">
        <div className="w-[23px] h-[23px] bg-[#C4C4C4] rounded-full"></div>
      </div>

      <h3 className="font-semibold text-[24px] text-[#09291B]">{item.title}</h3>
      <p className="text-[#64607D] text-[16px] max-w-[260px]">
        {item.description}
      </p>
    </div>
  );
}
