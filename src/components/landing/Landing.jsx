import Welcome from "@/components/landing/Welcome";
import About from "@/components/landing/About";
import PastProjects from "@/components/landing/PastProjects";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="w-full flex flex-col">
      <Welcome />
      <About />
      <PastProjects />
      <Button text="View More" />
    </div>
  );
};

export default Landing;
