import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-top";
import Home from "./pages/home";
import About from "./pages/about";
import News from "./pages/news";
import Projects from "./pages/projects";
import Career from "./pages/career";
import Previous from "./pages/previus-competitons";
import Expected from "./pages/expected-competitions";
import Achievements from "./pages/achievements";
import JoinUs from "./pages/join-us";
import ContactUs from "./pages/contact";
import Documents from "./components/login-parts/documents";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/news" element={<News />} />
        <Route path="/previous" element={<Previous />} />
        <Route path="/expected" element={<Expected />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
