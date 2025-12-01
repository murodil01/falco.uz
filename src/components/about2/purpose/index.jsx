import { useState, useEffect } from "react";
import purpose_bg from "../../../assets/purpose/purpose_bg.png";

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
          <h3 className="text-3xl md:text-[50px] font-bold text-center">
            Falco <span className="text-[#E8C777]">Maqsadi</span>
          </h3>
          <p className="mt-5 font-normal md:text-[24px] text-center">
            “Falco faqatgina hamjamiyat emas — u o‘zgarishlar harakatidir.
          </p>

          <div className="mt-16 flex flex-col md:flex-row gap-10">
            {/* Left side */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    1. <br /> Biz kimimiz
                  </h3>
                  <p className="text-[16px] md:text-[18px]">
                    Biz yoshlar uchun imkoniyat yaratadigan o‘sish va
                    rivojlanish hamjamiyatimiz.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    2.
                    <br /> Biz maqsadimiz
                  </h3>
                  <p className="text-[16px] md:text-[18px]">
                    Har bir ishtirokchi o‘z g‘oyasini rivojlantirishi va real
                    natijaga erishishi uchun zarur muhitni taqdim etamiz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    3.
                    <br /> Qanday yordam beramiz
                  </h3>
                  <p className="text-[16px] md:text-[18px]">
                    Mentorlik, treninglar va amaliy loyihalar orqali
                    rivojlanishingizga ko‘maklashamiz.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[20px] md:text-[24px] mb-2">
                    4.
                    <br /> O‘z muvaffaqiyat yo‘lingizni birga quramiz
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
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.9uQeXJPOGm7x6d4fFhnXxAHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Purpose Image 1"
                className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-lg"
              />
              <img
                src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
                alt="Purpose Image 2"
                className="w-[120px] h-[120px] md:w-[250px] md:h-[270px] object-cover rounded-lg"
              />
              <br />
              <img
                src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg"
                alt="Purpose Image 3"
                className="w-[120px] h-[120px] md:w-[250px] md:h-[270px] object-cover rounded-lg"
              />
              <img
                src="https://www.eviltwin.io/wp-content/uploads/2024/01/google-images.jpg"
                alt="Purpose Image 4"
                className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purpose;
