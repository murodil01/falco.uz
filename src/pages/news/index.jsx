import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import NewsHero from "../../components/news-parts/news-hero";

const News = () => {
  return (
    <div>
      <Navbar />
      <NewsHero/>
      <Contact />
      <Footer />
    </div>
  );
};

export default News;
