import Navbar from "@/components/Navbar";
import Welcome from "@/components/landing/Welcome";
import About from "@/components/landing/About";
import ProjectTypes from "@/components/landing/ProjectType";
import PastProjects from "@/components/landing/PastProjects";
import ViewMore from "@/components/ViewMore";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="w-full bg-blue-50 flex flex-col">
      <Navbar />
      <Welcome />
      <About />
      <ProjectTypes />
      <PastProjects />
      <ViewMore />
      <Footer />
    </div>
  );
};

export default Landing;
