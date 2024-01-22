// testComponent.js
import React from 'react';
import FakeData from './data/fakeData';  
import ProjectCard from './data/ProjectCard';  

const testComponent = () => {
  return (
    <div>
      {FakeData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default testComponent;
