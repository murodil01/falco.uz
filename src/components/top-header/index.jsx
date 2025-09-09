import Navbar from "../navbar";
import Hero from "../hero";
import header from "../../assets/images/header.png";

const TopHeader = () => {
  return (
    <div className="relative min-h-screen lg:min-h-[1400px] overflow-hidden">
      {/* Rasm */}
      <img
        src={header}
        alt="header"
        className="
          absolute top-0 right-0 h-full -z-10
          w-auto max-w-none
          object-contain md:object-cover
        "
      />
      <Navbar />
      <Hero />
    </div>
  );
};

export default TopHeader;
