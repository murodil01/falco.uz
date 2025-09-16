import Navbar from "../../components/navbar"
import ProjectSlider from "../../components/project-parts/project-slider"
import Contact from "../../components/contact"
import Footer from "../../components/footer"
import FloatingMenu from "../../components/floating-menu";

const Projects = () => {
  return <div>
    <Navbar/>
    <ProjectSlider/>
    <Contact/>
    <Footer/>
    <FloatingMenu/>
  </div>;
};

export default Projects;
