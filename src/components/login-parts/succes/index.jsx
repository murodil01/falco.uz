import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../../../assets/Success.svg";

const Succes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 3 soniyadan keyin avtomatik yo'naltirish
    const timer = setTimeout(() => {
      navigate("/"); // "/" o'rniga kerakli sahifani yozing (masalan, "/dashboard")
    }, 3000);

    return () => clearTimeout(timer); // Component unmount bo'lsa timerni tozalash
  }, [navigate]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[600px] mx-auto px-4 py-8">
      {/* Rasm */}
      <img
        className="w-full max-w-[170px] h-auto sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px]"
        loading="lazy"
        src={Success}
        alt="Success"
      />

      {/* Sarlavha */}
      <h3 className="text-[#313131] text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold text-center capitalize leading-snug">
        Sizning so’rovingiz muvaffaqqiyatli yuborildi
      </h3>
    </div>
  );
};

export default Succes;
