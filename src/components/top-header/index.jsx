import Navbar from "../navbar";
import Hero from "../hero";
import header from "../../assets/images/header.png";

const TopHeader = () => {
  return (
    <div className="relative min-h-screen lg:min-h-[1400px] overflow-hidden">
      {/* Background */}
      <img
        fetchPriority="high"
        decoding="async"
        src={header}
        alt="header"
        className="
          absolute inset-0 -z-10
          w-full h-full
          object-cover
          pointer-events-none
          select-none
        "
      />
      <Navbar />
      <Hero />
    </div>
  );
};

export default TopHeader;
