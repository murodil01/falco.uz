import AboutHero from "../../components/about-parts/about-hero";
import Navbar from "../../components/navbar";
import Contact from "../../components/contact"
import Footer from "../../components/footer";
import Planners from "../../components/about-parts/planners";
import Travel from "../../components/about-parts/travel";
import Gallery from "../../components/about-parts/gallery";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Planners />
      <Travel/>
      <Gallery/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default About;
