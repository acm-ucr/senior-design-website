// ProjectCard.js

import React from 'react';




const ProjectCard = ({ project }) => {
  const { projectName, icon, projectType, names, description } = project;

  return (
    <div className= "project-card">
      
      <img src={icon} alt={projectName} className="project-image" />

      
      <div className="project-details">
       
        <h2 className="project-name">{projectName}</h2>

       
        <div className="project-type">
          <img src={projectType.icon} alt={projectType.name} />
          <p>{projectType.name}</p>
        </div>

        
        <div className="collaborators">
          <p className="collaborators-text">{names.join(', ')}</p>
        </div>

       
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
