import React from "react";
import Image from "next/image";
import img1 from "@/public/stockphoto1.jpg";
import img2 from "@/public/stockphoto2.jpg";
import img3 from "@/public/stockphoto3.jpg";

const ProjectCard = ({ project, index }) => {
  const { projectName, year, names, description } = project;
  const images = [img1, img2, img3];

  return (
    <div className="flex h-full w-11/12 flex-col justify-center items-center shadow-lg rounded-xl m-0 md:m-2 mt-3 overflow-hidden">
      <Image
        src={images[index % 3]}
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
