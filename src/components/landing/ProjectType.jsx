import emblogo from "../../../public/svg/embedded-systems.svg";
import databaselogo from "../../../public/svg/database.svg";
import networklogo from "../../../public/svg/network.svg";
import electroniclogo from "../../../public/svg/electronic-game.svg";
import compilerlogo from "../../../public/svg/compiler.svg";
import oslogo from "../../../public/svg/operating-systems.svg";
import ailogo from "../../../public/svg/artificial-intelligence.svg";
import otherslogo from "../../../public/svg/others.svg";
import Image from "next/image";
import Link from "next/link";

const ProjectTypes = () => {
  return (
    <div className="bg-white py-4 sm:py-12">
      <p className="text-senior-purple-100 text-xl text-center font-bold sm:text-4xl pt-0 sm:pt-4 pb-2 sm:pb-12">
        Types of Projects
      </p>
      <div className="flex flex-row justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-20 md:px-40">
          <Link
            href="/projects"
            className="bg-projects-emb-100 rounded-xl relative overflow-hidden flex p-4"
          >
            <Image
              src={emblogo}
              width={225}
              height={225}
              alt="emblogo"
              className="-ml-8 md:-ml-14"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              EMBEDDED
              <br />
              SYSTEMS
            </p>
          </Link>

          <Link
            href="/projects"
            className="bg-projects-database-100 rounded-xl relative overflow-hidden flex p-4"
          >
            <Image
              src={databaselogo.src}
              width={225}
              height={225}
              alt="databaselogo"
              className="-ml-8 md:-ml-14"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              DATABASE
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-network-100 rounded-xl relative overflow-hidden flex p-4"
          >
            <Image
              src={networklogo.src}
              width={225}
              height={225}
              alt="networklogo"
              className="-ml-8 md:-ml-14"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              NETWORK
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-game-100 rounded-xl relative overflow-hidden flex p-4"
          >
            <Image
              src={electroniclogo.src}
              width={225}
              height={225}
              alt="electroniclogo"
              className="-ml-6 md:-ml-14"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              ELECTRONIC
              <br />
              GAME
            </p>
          </Link>

          <Link
            href="/projects"
            className="bg-projects-compiler-100 rounded-xl relative overflow-hidden flex p-4"
          >
            <Image
              src={compilerlogo.src}
              width={225}
              height={225}
              alt="compilerlogo"
              className="-ml-6 md:-ml-8"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              COMPILER
            </p>
          </Link>

          <Link
            href="/projects"
            className="bg-projects-operating-100 rounded-xl relative overflow-hidden flex p-4"
          >
            <Image
              src={oslogo.src}
              width={300}
              height={200}
              alt="oslogo"
              className="-ml-6 md:-ml-14"
            />

            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              OPERATING
              <br />
              SYSTEMS
            </p>
          </Link>

          <Link
            href="/projects"
            className="bg-projects-ai-100 rounded-xl relative overflow-hidden flex"
          >
            <Image
              src={ailogo.src}
              width={275}
              height={225}
              alt="ailogo"
              className="-ml-6 md:-ml-8"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              ARTIFICIAL
              <br />
              INTELLIGENCE
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-others-100 rounded-xl relative overflow-hidden flex p-4"
          >
            <Image
              src={otherslogo.src}
              width={225}
              height={225}
              alt="otherslogo"
              className="-ml-6 md:-ml-10"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              OTHERS
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypes;
