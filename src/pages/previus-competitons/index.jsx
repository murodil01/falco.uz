import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import PreviousHero from "../../components/previous-parts/previous-hero";
import PreviousResults from "../../components/previous-parts/previous-results";
import FloatingMenu from "../../components/floating-menu";

const Previous = () => {
  return (
    <div>
      <Navbar />
      <PreviousHero/>
      <PreviousResults/>
      <Contact />
      <Footer />
      <FloatingMenu/>
    </div>
  );
};

export default Previous;
