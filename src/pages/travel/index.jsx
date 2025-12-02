import TravelHero from "../../components/travel-parts/travel-hero";
import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Planners from "../../components/travel-parts/planners";
import Travel from "../../components/travel-parts/travel";
import Gallery from "../../components/travel-parts/gallery";
import FloatingMenu from "../../components/floating-menu";
import "../../components/travel-parts/planners/Slider.css";

const Travels = () => {
  return (
    <div>
      <Navbar />
      <TravelHero />
      <Planners />
      <Travel />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Travels;
