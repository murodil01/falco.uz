import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import CareerHero from "../../components/career/career-hero";
import FloatingMenu from "../../components/floating-menu"

const Career = () => {
  return (
    <div>
      <Navbar />
      <CareerHero />
      <Contact />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Career;
