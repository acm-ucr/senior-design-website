import Image from "next/image";
import emblogo from "../../../public/svg/embedded-systems.svg";
import databaselogo from "../../../public/svg/database.svg";
import networklogo from "../../../public/svg/network.svg";
import electroniclogo from "../../../public/svg/electronic-game.svg";
import compilerlogo from "../../../public/svg/compiler.svg";
import oslogo from "../../../public/svg/operating-systems.svg";
import ailogo from "../../../public/svg/artificial-intelligence.svg";
import otherslogo from "../../../public/svg/others.svg";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaFigma } from "react-icons/fa";

const logos = {
  emblogo,
  databaselogo,
  networklogo,
  electroniclogo,
  compilerlogo,
  oslogo,
  ailogo,
  otherslogo,
};

const Title = ({ type, logo }) => {
  return (
    <div className="px-10">
      <div className="text-yellow-500 font-bold text-xl pb-1">2023 - 2024</div>
      <div className="text-senior-purple-100 font-bold text-3xl pb-1">
        Project Name
      </div>
      <div className="text-senior-gray-100 text-normal pb-1">
        by Minnie Bennet, Chadwick Clayton, Ralph Hayes, Bertha Meza
      </div>
      <div className="flex pb-1">
        <Image
          src={logos[logo]}
          width={22}
          height={22}
          alt="{logo}"
          className="pr-1"
        />
        <div className="text-senior-purple-100 text-sm">{type}</div>
      </div>
      <div className="flex">
        <div className="flex border-2 rounded">
          <FaGithub className="mt-1 mx-2" />
          <div className="flex-shrink-0 pr-1">Github</div>
        </div>
        <div className="flex border-2 rounded mx-2">
          <FaFigma className="mt-1 mx-2" />
          <div className="flex-shrink-0 pr-1">Figma</div>
        </div>
        <div className="flex border-2 rounded">
          <IoIosLink className="mt-1 mx-2" />
          <div className="flex-shrink-0 pr-1">Link</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
