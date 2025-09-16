import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import AchieveHero from "../../components/achieve-parts/achieve-hero";
import FloatingMenu from "../../components/floating-menu";

const Achievements = () => {
  return (
    <div>
      <Navbar />
      <AchieveHero />
      <Contact />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Achievements;
