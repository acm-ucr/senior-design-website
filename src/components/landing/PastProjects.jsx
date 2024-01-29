import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/components/projectcard";

const PastProjects = () => {
  return (
    <div className="bg-white  flex justify-center items-center text-center flex-col">
      <div>2022 - 2023</div>
      <div className="flex flex-wrap justify-around" >
        {FakeData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <button className="bg-yellow-300 ">Load More</button>
    </div>
  );
};

export default PastProjects;
