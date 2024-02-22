import Image from "next/image";
import Title from "./Title";
import img1 from "../../../public/tempimage.png";
import img2 from "../../../public/image1.png";

const Details = () => {
  return (
    <div className="bg-white px-0 md:px-0">
      <div className="relative h-96 w-full">
        <Image src={img2} layout="fill" objectFit="cover" alt="projectImage" />
      </div>
      <div className="bg-white px-8 md:px-32 lg:px-32 xl:px-64">
        <Title
          year="2023-2024"
          projectName="Project Name"
          teamMembers="Minnie Bennet, Chadwick Clayton, Ralph Hayes, Bertha Meza"
          type="Operating System"
          logo="oslogo"
        />

        <div className="flex items-center gap-1 pt-5">
          <div className="bg-senior-yellow-100 h-5 w-1" />
          <p className="font-bold text-lg">Inspiration</p>
        </div>

        <p className="pl-4 pt-2 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="flex items-center gap-1">
          <div className="bg-senior-yellow-100 h-5 w-1" />
          <p className="font-bold text-lg">Purpose</p>
        </div>
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 pl-4 pt-2 gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliqu
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliqu
          </p>
          <div>
            <Image src={img1} width={350} height={250} alt="projectimage" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="bg-senior-yellow-100 h-5 w-1" />
          <p className="font-bold text-lg pt-6">Video</p>
        </div>

        <div className="pl-4 pt-2 pb-16 flex justify-center">
          <Image src={img1} width={450} height={350} alt="projectimage" />
        </div>
      </div>
    </div>
  );
};

export default Details;
