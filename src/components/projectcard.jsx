// ProjectCard.js

import React from "react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const { projectName, icon, year, names, description } = project;

  return (
    <div className="flex-col justify-self-center justify-center items-center shadow-2xl  min-w-96 h-full w-96  rounded-md md:w-5/6 lg:w-7/12   sm:w-5/6 mt-3">
      <Image
        src={icon}
        alt={projectName}
        className="project-image self-center mx-auto "
        width={150}
        height={175}
        style={{ alignSelf: "center" }}
      />

      <div className="project-details text-center">
        <h2 className="project-name text-2xl font-bold mt-2">{projectName}</h2>

        <p className="text-gray-400  text-xl -mt-2">{year}</p>

        <div className="collaborators text-lg text-gray-400 -mt-3">
          <p className="collaborators-text text-lg">{names.join(", ")}</p>
        </div>
        <div className="max-w-xs mx-auto mb-4 -mt-3">
          <p className="project-description text-base   display: inline ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
