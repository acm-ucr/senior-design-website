import Filterbuttons from "../../components/projects/filterbuttons";
import ProjectCards from "@/components/projects/ProjectCards";

const Page = () => {
  return (
    <>
      <div>Projects</div>
      <div>
        <Filterbuttons />
      </div>

      <ProjectCards />
    </>
  );
};

export default Page;
