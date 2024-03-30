import Search from "@/components/projects/Search";
import Cards from "@/components/projects/Cards";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";
import Pagination from "@/components/projects/Pagination";
import { Suspense } from "react";

const Projects = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <ProjectThumbnail />
      <Suspense>
        <Search />
        <Cards />
        <Pagination />
      </Suspense>
    </div>
  );
};

export default Projects;
