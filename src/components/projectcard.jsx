import React from "react";
import Image from "next/image";
import img1 from "@/public/stockphoto1.jpg";
import img2 from "@/public/stockphoto2.jpg";
import img3 from "@/public/stockphoto3.jpg";

const ProjectCard = ({ project, index }) => {
  const { projectName, year, names, description } = project;
  const images = [img1, img2, img3];

  return (
    <div className="flex-col justify-self-center justify-center items-center shadow-2xl min-w-80 rounded-lg h-full w-96 md:w-5/6 lg:w-7/12 sm:w-5/6 mt-3 overflow-hidden">
      <Image
        src={images[index % 3]}
        alt={projectName}
        className="project-image self-center mx-auto"
        width={380}
        height={175}
        style={{ alignSelf: "center" }}
      />

      <div className="project-details text-center">
        <h2 className="project-name text-2xl font-bold mt-2">{projectName}</h2>

        <p className="text-gray-400  text-xl -mt-2">{year}</p>

        <div className="collaborators text-lg text-gray-400 -mt-3">
          <p className="collaborators-text text-lg">{names.join(", ")}</p>
        </div>
        <div className="max-w-xs mx-auto w-[85%] mb-4 -mt-3">
          <p className="project-description text-base display: inline ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
