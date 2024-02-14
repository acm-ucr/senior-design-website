// testComponent.js
import React from "react";
import FakeData from "@/data/fakedata";
import ProjectCard from "@/data/projectcard";

const TestComponent = () => {
  return (
    <div>
      {FakeData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default TestComponent;
