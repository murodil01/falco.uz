import Navbar from "../../components/navbar";
import ExpectedHero from "../../components/expected/expected-hero";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import FloatingMenu from "../../components/floating-menu"

const Expected = () => {
  return (
    <div>
      <Navbar />
      <ExpectedHero />
      <Contact />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Expected;
