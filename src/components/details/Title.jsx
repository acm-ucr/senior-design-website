import Image from "next/image";
import emblogo from "../../../public/svg/embedded-systems.svg";
import databaselogo from "../../../public/svg/database.svg";
import networklogo from "../../../public/svg/network.svg";
import electroniclogo from "../../../public/svg/electronic-game.svg";
import compilerlogo from "../../../public/svg/compiler.svg";
import oslogo from "../../../public/svg/operating-systems.svg";
import ailogo from "../../../public/svg/artificial-intelligence.svg";
import otherslogo from "../../../public/svg/others.svg";
import figmaLogo from "@/public/figma.png";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";

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

const Title = ({ year, projectName, teamMembers, type, logo }) => {
  return (
    <div className="mt-5 px-15">
      <p className="text-yellow-500 font-bold text-xl mb-1">{year}</p>
      <p className="text-senior-purple-100 font-bold text-3xl mb-1">
        {projectName}
      </p>
      <p className="text-senior-gray-100 text-normal mb-1">by {teamMembers}</p>
      <div className="flex items-baseline">
        <Image
          src={logos[logo]}
          width={22}
          height={22}
          alt="{logo}"
          className="pr-1"
        />
        <p className="text-senior-purple-100 text-sm mb-1">{type}</p>
      </div>
      <div className="flex pb-10 inline-block">
        <div className="flex md:border-2 rounded float-sm-smart">
          <FaGithub className="mt-1 mx-2" />
          <p className="p-0 mr-2">Github</p>
        </div>
        <div className="flex border-2 rounded mx-2">
          <div className="mt-1 mx-2 w-4 h-4">
            <Image src={figmaLogo} alt="Figma logo" />
          </div>
          <p className="p-0 mr-2">Figma</p>
        </div>
        <div className="flex border-2 rounded">
          <HiLink className="mt-1 mx-2" flex flip="horizontal" />
          <p className="p-0 mr-2">Link</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
