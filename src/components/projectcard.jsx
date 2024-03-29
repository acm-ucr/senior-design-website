// ProjectCard.js

import React from "react";
import Image from "next/image";
import temp from "public/tempimage.png";

const ProjectCard = ({ project }) => {
  const { projectName, year, names, description } = project;

  return (
    <div className="flex h-full w-11/12 flex-col justify-center items-center shadow-lg rounded-xl m-0 md:m-2 mt-3 overflow-hidden">
      <Image
        src={temp}
        alt={projectName}
        className="w-full h-3/5 object-cover"
      />

      <div className="text-center font-raleway">
        <h2 className="text-2xl font-bold mt-2">{projectName}</h2>

        <p className="text-gray-400 text-xl -mt-2">{year}</p>

        <div className="text-lg text-gray-400 -mt-3">
          <p className="text-lg">{names.join(", ")}</p>
        </div>
        <div className="max-w-xs mx-auto mb-4 -mt-3">
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
