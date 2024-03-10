import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/components/projectcard";

const PastProjects = () => {
  const numberOfCardsToShow = 18;

  const visibleProjects = FakeData.events.slice(0, numberOfCardsToShow);

  return (
    <div className="bg-white flex justify-center items-center text-center flex-col py-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-14 ">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={0} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PastProjects;
