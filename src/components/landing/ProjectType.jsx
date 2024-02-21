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
    <div className="bg-white py-12">
      <p className="text-senior-purple-100 text-center font-bold text-3xl pt-10 pb-16">
        Types of Projects
      </p>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14 px-20">
          <Link
            href="/projects"
            className="bg-projects-emb-100 rounded-xl relative overflow-hidden flex p-3 min-w-40 max-w-40 h-40"
          >
            <Image
              src={emblogo.src}
              width={225}
              height={225}
              alt="emblogo"
              className="-ml-12 md:-ml-12"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              EMBEDDED
              <br />
              SYSTEMS
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-database-100 rounded-xl relative overflow-hidden flex p-3 min-w-40 max-w-40 h-40"
          >
            <Image
              src={databaselogo.src}
              width={225}
              height={225}
              alt="databaselogo"
              className="-ml-8 md:-ml-8"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              DATABASE
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-network-100 rounded-xl relative overflow-hidden flex p-3 min-w-40 max-w-40 h-40"
          >
            <Image
              src={networklogo.src}
              width={225}
              height={225}
              alt="networklogo"
              className="-ml-12 md:-ml-10"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              NETWORK
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-game-100 rounded-xl relative overflow-hidden flex p-2 min-w-40 max-w-40 h-40"
          >
            <Image
              src={electroniclogo.src}
              width={225}
              height={225}
              alt="electroniclogo"
              className="-ml-6 md:-ml-6"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              GRAPHICS
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-compiler-100 rounded-xl relative overflow-hidden flex p-3 min-w-40 max-w-40 h-40"
          >
            <Image
              src={compilerlogo.src}
              width={170}
              height={225}
              alt="compilerlogo"
              className="-ml-8 -mb-6 md:-ml-8 md:-mb-6"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              COMPILER
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-operating-100 rounded-xl relative overflow-hidden flex min-w-40 max-w-40 h-40"
          >
            <Image
              src={oslogo.src}
              width={225}
              height={225}
              alt="oslogo"
              className="-ml-8 md:-ml-8"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              OPERATING
              <br />
              SYSTEMS
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-ai-100 rounded-xl relative overflow-hidden flex p-2 min-w-40 max-w-40 h-40"
          >
            <Image
              src={ailogo.src}
              width={225}
              height={225}
              alt="ailogo"
              className="-ml-8 md:-ml-8"
            />
            <p className="text-white text-xl font-bold text-right mr-2 absolute inset-x-0 bottom-0">
              ARTIFICIAL
              <br />
              INTELLIGENCE
            </p>
          </Link>
          <Link
            href="/projects"
            className="bg-projects-others-100 rounded-xl relative overflow-hidden flex p-2 min-w-40 max-w-40 h-40"
          >
            <Image
              src={otherslogo.src}
              width={225}
              height={225}
              alt="otherslogo"
              className="-ml-10 -mb-6 md:-ml-10 md:-mb-6"
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
