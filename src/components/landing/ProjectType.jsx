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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 px-20 md:px-48">
        <Link
          href="/projects"
          className="bg-projects-emb-100 rounded-xl overflow-hidden flex p-4"
        >
          <Image
            src={emblogo.src}
            width={225}
            height={225}
            alt="emblogo"
            className="-ml-8 md:-ml-14"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute -ml-1 mt-8 md:ml-10 md:mt-28">
            EMBEDDED
            <br />
            SYSTEMS
          </p>
        </Link>
        <Link
          href="/projects"
          className="bg-projects-database-100 rounded-xl overflow-hidden flex p-4"
        >
          <Image
            src={databaselogo.src}
            width={225}
            height={225}
            alt="databaselogo"
            className="-ml-8 md:-ml-14"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute mt-12 md:ml-12 md:mt-36">
            DATABASE
          </p>
        </Link>
        <Link
          href="/projects"
          className="bg-projects-network-100 rounded-xl overflow-hidden flex p-4"
        >
          <Image
            src={networklogo.src}
            width={225}
            height={225}
            alt="networklogo"
            className="-ml-8 md:-ml-14"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute mt-12 md:ml-12 md:mt-36">
            NETWORK
          </p>
        </Link>
        <Link
          href="/projects"
          className="bg-projects-game-100 rounded-xl overflow-hidden flex p-4"
        >
          <Image
            src={electroniclogo.src}
            width={225}
            height={225}
            alt="electroniclogo"
            className="-ml-6 md:-ml-14"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute -ml-3 mt-8 md:ml-6 md:mt-28">
            ELECTRONIC
            <br />
            GAME
          </p>
        </Link>
        <Link
          href="/projects"
          className="bg-projects-compiler-100 rounded-xl overflow-hidden flex p-4"
        >
          <Image
            src={compilerlogo.src}
            width={170}
            height={225}
            alt="compilerlogo"
            className="-ml-6 md:-ml-8"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute mt-14 md:ml-12 md:mt-36">
            COMPILER
          </p>
        </Link>
        <Link
          href="/projects"
          className="bg-projects-operating-100 rounded-xl overflow-hidden flex"
        >
          <Image
            src={oslogo.src}
            width={225}
            height={225}
            alt="oslogo"
            className="-ml-6 md:-ml-14"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute ml-3 mt-14 md:ml-12 md:mt-36">
            OPERATING
            <br />
            SYSTEMS
          </p>
        </Link>
        <Link
          href="/projects"
          className="bg-projects-ai-100 rounded-xl overflow-hidden flex"
        >
          <Image
            src={ailogo.src}
            width={225}
            height={225}
            alt="ailogo"
            className="-ml-6 md:-ml-8"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute mt-12 md:ml-6 md:mt-36">
            ARTIFICIAL
            <br />
            INTELLIGENCE
          </p>
        </Link>
        <Link
          href="/projects"
          className="bg-projects-others-100 rounded-xl overflow-hidden flex p-4"
        >
          <Image
            src={otherslogo.src}
            width={225}
            height={225}
            alt="otherslogo"
            className="-ml-6 md:-ml-10"
          />
          <p className="text-white text-xs md:text-2xl font-bold text-right absolute ml-4 mt-12 md:ml-20 md:mt-36">
            OTHERS
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTypes;
