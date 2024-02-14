import Welcome from "@/components/landing/Welcome";
import About from "@/components/landing/About";
import ProjectTypes from "@/components/landing/ProjectType";
import PastProjects from "@/components/landing/PastProjects";
import ViewMore from "@/components/ViewMore";

const Landing = () => {
  return (
    <div className="w-full bg-blue-50 flex flex-col">
      <Welcome />
      <About />

      <ProjectTypes />
      <PastProjects />
      <ViewMore />
    </div>
  );
};

export default Landing;
