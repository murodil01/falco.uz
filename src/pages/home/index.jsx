import About from "../../components/about";
import Answer from "../../components/answer";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import NewsMain from "../../components/news-main";
import Sldier from "../../components/slider";
import SplashScreen from "../../components/splash";
import Team from "../../components/team";
import TopHeader from "../../components/top-header";
import FloatingMenu from "../../components/floating-menu"

const Home = () => {
  return (
    <div id="home">
      <SplashScreen />
      <TopHeader />
      <Sldier />
      <About />
      <Answer />
      <NewsMain/>
      <Team/>
      <Contact/>
      <Footer />
      <FloatingMenu/>
    </div>
  );
};

export default Home;
