import Welcome from "@/components/landing/Welcome";
import About from "@/components/landing/About";
import PastProjects from "@/components/landing/PastProjects";
import ViewMore from "@/components/ViewMore";

const Landing = () => {
  return (
    <div className="w-full flex flex-col">
      <Welcome />
      <About />
      <PastProjects />
      <ViewMore />
    </div>
  );
};

export default Landing;
