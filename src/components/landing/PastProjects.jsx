import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/components/ProjectCard";

const PastProjects = () => {
  const numberOfCardsToShow = 6;

  const visibleProjects = FakeData.events.slice(0, numberOfCardsToShow);

  return (
    <div className="bg-white  flex justify-center items-center text-center flex-col py-8">
      <div className="py-8 font-bold text-4xl">2022 - 2023</div>
      <div className="grid md:w-11/12 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 ml-10">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PastProjects;
