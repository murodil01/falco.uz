import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import PreviousHero from "../../components/previous-parts/previous-hero";
import PreviousResults from "../../components/previous-parts/previous-results";

const Previous = () => {
  return (
    <div>
      <Navbar />
      <PreviousHero/>
      <PreviousResults/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Previous;
