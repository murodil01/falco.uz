import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import FloatingMenu from "../../components/floating-menu";
import Hero from "../../components/about2/hero";
import Statistics from "../../components/about2/statistics";
import Purpose from "../../components/about2/purpose";
import Steps from "../../components/about2/steps";
import "../../components/about-parts/planners/Slider.css";

const AboutMin = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Statistics />
      <Purpose />
      <Steps />
      <Contact />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default AboutMin;
