import AboutHero from "../../components/about-parts/about-hero";
import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Planners from "../../components/about-parts/planners";
import Travel from "../../components/about-parts/travel";
import Gallery from "../../components/about-parts/gallery";
import FloatingMenu from "../../components/floating-menu";
import "../../components/about-parts/planners/Slider.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Planners />
      <Travel />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default About;
