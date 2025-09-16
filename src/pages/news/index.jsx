import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import NewsHero from "../../components/news-parts/news-hero";
import FloatingMenu from "../../components/floating-menu";

const News = () => {
  return (
    <div>
      <Navbar />
      <NewsHero/>
      <Contact />
      <Footer />
      <FloatingMenu/>
    </div>
  );
};

export default News;
