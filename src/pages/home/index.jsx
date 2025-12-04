import Answer from "../../components/answer";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import NewsMain from "../../components/news-main";
import SplashScreen from "../../components/splash";
import Team from "../../components/team";
import Gallery from "../../components/travel-parts/gallery";
import TopHeader from "../../components/top-header";
import FloatingMenu from "../../components/floating-menu"
import Slider from "../../components/slider";

const Home = () => {
  return (
    <div id="home">
      <SplashScreen />
      <TopHeader />
      <Slider />
      <Answer />
      <NewsMain/>
      <Team/>
      <Gallery/>
      <Contact/>
      <Footer />
      <FloatingMenu/>
    </div>
  );
};

export default Home;
