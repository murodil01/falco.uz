import { useState, useEffect } from "react";
import purpose_bg from "../../../assets/purpose/purpose_bg.png";
import purpose1 from "../../../assets/purpose/purpose1.png";
import purpose2 from "../../../assets/purpose/purpose2.png";
import purpose3 from "../../../assets/purpose/purpose3.png";
import purpose4 from "../../../assets/purpose/purpose4.png";

const Purpose = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = purpose_bg;
    img.onload = () => setLoading(false);
  }, []);

  return (
    <div className="relative w-full min-h-[1120px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        loading="lazy"
        src={purpose_bg}
        alt="Purpose Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Content */}
      {!loading && (
        <div className="relative z-10 max-w-[1260px] mx-auto px-4 md:px-6 text-white">
          <h3 className="text-3xl md:text-[50px] font-bold text-center mt-6 md:mt-0">
            Falco <span className="text-[#E8C777]">Maqsadi</span>
          </h3>
          <p className="mt-6 font-normal md:text-[24px] text-center">
            “Falco faqatgina hamjamiyat emas — u o‘zgarishlar harakatidir.
          </p>

          <div className="mt-16 flex items-center flex-col-reverse md:flex-row gap-5 md:gap-10">
            {/* Left side */}
            <div className="flex-1 flex items-start gap-3 md:gap-8">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    1. Biz kimimiz
                  </h3>
                  <p className="text-[16px] md:text-[18px]">
                    Biz yoshlar uchun imkoniyat yaratadigan o‘sish va
                    rivojlanish hamjamiyatimiz.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    2. Biz maqsadimiz
                  </h3>
                  <p className="text-[16px] md:text-[18px]">
                    Har bir ishtirokchi o‘z g‘oyasini rivojlantirishi va real
                    natijaga erishishi uchun zarur muhitni taqdim etamiz.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    3. Qanday yordam beramiz
                  </h3>
                  <p className="text-[16px] md:text-[18px]">
                    Mentorlik, treninglar va amaliy loyihalar orqali
                    rivojlanishingizga ko‘maklashamiz.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    4. O‘z muvaffaqiyat yo‘lingizni birga quramiz
                  </h3>
                  <p className="text-[16px] md:text-[18px]">
                    Falco sizga imkoniyatlar eshigini ochadi — siz esa u orqali
                    o‘tib, o‘z yutuqlaringizni yaratasiz.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex-1 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  loading="loader"
                  src={purpose1}
                  alt="Purpose Image 1"
                  className="w-[120px] h-[120px] md:w-[250px] md:h-[150px] object-cover rounded-lg"
                />
                <img
                  loading="loader"
                  src={purpose2}
                  alt="Purpose Image 2"
                  className="w-[120px] h-[120px] md:w-[250px] md:h-[270px] object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center gap-4">
                <img
                  loading="loader"
                  src={purpose3}
                  alt="Purpose Image 3"
                  className="w-[120px] h-[120px] md:w-[250px] md:h-[270px] object-cover rounded-lg"
                />
                <img
                  loading="loader"
                  src={purpose4}
                  alt="Purpose Image 4"
                  className="w-[120px] h-[120px] md:w-[250px] md:h-[150px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purpose;
