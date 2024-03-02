import Image from "next/image";
import Title from "./Title";
import img1 from "../../../public/tempimage.png";
import img2 from "../../../public/image1.png";
import FakeDetailsData from "@/data/fakedetailsdata";

const Details = () => {
  const inspirationLines = FakeDetailsData[0].inspiration.split("\n");
  const purposeLines = FakeDetailsData[0].purpose.split("\n");
  const video = FakeDetailsData[0].video;

  return (
    <div className="bg-white px-0 md:px-0">
      <div className="relative h-96 w-full">
        <Image src={img2} layout="fill" objectFit="cover" alt="projectImage" />
      </div>
      <div className="bg-white px-8 md:px-64">
        <Title
          year="2023-2024"
          projectName="Project Name"
          teamMembers="Minnie Bennet, Chadwick Clayton, Ralph Hayes, Bertha Meza"
          type="Operating System"
          logo="oslogo"
        />
        <div className="flex items-center gap-1">
          <div className="bg-senior-yellow-100 h-5 w-1" />
          <p className="font-bold text-lg pt-3">Inspiration</p>
        </div>
        <div className="pl-4 pt-4 pb-12">
          {inspirationLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <div className="bg-senior-yellow-100 h-5 w-1" />
          <p className="font-bold text-lg pt-3">Purpose</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pl-4 pt-4 pb-12 gap-4">
          <div>
            {purposeLines.map((line, index) => (
              <div key={index}>
                {line}
                <p>&nbsp;</p>
              </div>
            ))}
          </div>
          <div>
            <Image src={img1} width={350} height={250} alt="projectimage" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="bg-senior-yellow-100 h-5 w-1" />
          <p className="font-bold text-lg pt-3">Video</p>
        </div>
        <div className="text-center">{video}</div>
        <div className="pl-4 pt-4 pb-16 flex justify-center">
          <Image src={img1} width={450} height={350} alt="projectimage" />
        </div>
      </div>
    </div>
  );
};

export default Details;
