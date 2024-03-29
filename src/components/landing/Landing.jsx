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
      <div className="w-full flex justify-center mt-2">
        <Button text="View More" />
      </div>
    </div>
  );
};

export default Landing;
