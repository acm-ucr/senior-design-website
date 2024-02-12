// ProjectCard.js

import React from "react";
import Image from "next/image";
import emblogo from "@/public/svg/embedded-systems.svg";
import databaselogo from "@/public/svg/database.svg";
import networklogo from "@/public/svg/network.svg";
import electroniclogo from "@/public/svg/electronic-game.svg";
import compilerlogo from "@/public/svg/compiler.svg";
import oslogo from "@/public/svg/operating-systems.svg";
import ailogo from "@/public/svg/artificial-intelligence.svg";
import otherslogo from "@/public/svg/others.svg";

const ProjectCard = ({ project }) => {
  const { projectName, icon, projectType, year, names, description } = project;

  const iconMap = {
    "Embedded Systems": emblogo,
    Database: databaselogo,
    Network: networklogo,
    "Electronic Game": electroniclogo,
    Compiler: compilerlogo,
    "Operating Systems": oslogo,
    "Artificial Intelligence": ailogo,
    Others: otherslogo,
  };

  return (
    <div className="flex-col justify-self-center justify-center items-center shadow-2xl  min-w-96 h-full w-96  rounded-md md:w-5/6 lg:w-7/12   sm:w-5/6">
      <Image
        src={icon}
        alt={projectName}
        className="project-image self-center mx-auto "
        width={200}
        height={225}
        style={{ alignSelf: "center" }}
      />

      <div className="project-details text-center">
        <h2 className="project-name text-2xl font-bold mt-2">{projectName}</h2>

        <div className="flex flex-row justify-center items-center text-center ">
          <Image
            src={iconMap[projectType]}
            alt={projectType}
            width={21}
            height={21}
            className="projectypeimage justify-center items-center"
          />
          <div className="ml-1.5">
            <p className="text-base justify-center items-center m	mb-0">
              {projectType}
            </p>
          </div>
        </div>

        <p className="text-gray-400  mt-1">{year}</p>

        <div className="collaborators text-sm text-gray-400">
          <p className="collaborators-text">{names.join(", ")}</p>
        </div>
        <div className="max-w-xs mx-auto mb-4 ">
          <p className="project-description text-sm   display: inline ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
