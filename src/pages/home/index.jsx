import About from "../../components/about";
import Answer from "../../components/answer";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Sldier from "../../components/slider";
import SplashScreen from "../../components/splash";
import Team from "../../components/team";
import TopHeader from "../../components/top-header";

const Home = () => {
  return (
    <div id="home">
      <SplashScreen />
      <TopHeader />
      <Sldier />
      <About />
      <Answer />
      <Team/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
