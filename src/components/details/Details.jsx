import Image from "next/image";
import Title from "./Title";
import img1 from "../../../public/tempimage.png";
import img2 from "../../../public/image1.png";
import FakeDetailsData from "@/data/fakedetailsdata.json";

const Details = ({ year, projectName, teamMembers }) => {
  const inspiration = FakeDetailsData[0].inspiration;
  const purpose = FakeDetailsData[0].purpose;
  const video = FakeDetailsData[0].video;
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="relative h-96">
        <Image src={img2} layout="fill" objectFit="cover" alt="projectImage" />
      </div>
      <div className="bg-white pt-8 md:pt-12 lg:pt-16">
        <Title
          year="2022-2023"
          projectName="Project Name"
          teamMembers="Minnie Bennett, Chadwick Clayton, Ralph Hayes, Bertha Meza"
        />
        <div className="flex items-center gap-1 pt-5">
          <div className="bg-senior-yellow-100 h-5 w-1 -mt-4" />
          <p className="font-bold text-lg">Inspiration</p>
        </div>
        <div className="pl-4 pt-4 pb-8 md:pb-12 lg:pb-16">
          <div>{inspiration}</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-senior-yellow-100 h-5 w-1 -mt-4" />
          <p className="font-bold text-lg">Purpose</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pt-4 pb-8 md:pb-12 lg:pb-16">
          <div>
            <div>{purpose}</div>
          </div>
          <div>
            <Image src={img1} width={350} height={250} alt="projectimage" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-senior-yellow-100 h-5 w-1 mt-2" />
          <p className="font-bold text-lg pt-6">Video</p>
        </div>
        <div className="text-center pb-8 md:pb-12 lg:pb-16">{video}</div>
        <div className="flex justify-center">
          <Image src={img1} width={450} height={350} alt="projectimage" />
        </div>
      </div>
    </div>
  );
};

export default Details;
