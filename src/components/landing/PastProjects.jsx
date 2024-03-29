import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/components/projectcard";

const PastProjects = () => {
  const numberOfCardsToShow = 6;

  const visibleProjects = FakeData.events.slice(0, numberOfCardsToShow);

  return (
    <div className="bg-white  flex justify-center items-center text-center flex-col py-8">
      <div className="py-8 font-bold text-4xl">2022 - 2023</div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center sm:gap-6 gap-14 ">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PastProjects;
