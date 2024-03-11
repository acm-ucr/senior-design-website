import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";

const PastProjects = () => {
  return (
    <>
      <div className="h-72 w-screen absolute flex justify-center">
        <p className="text-xl font-black text-white absolute bottom-0 z-4">
          PROJECTS
        </p>
      </div>
      <div className="h-72 w-screen bg-black absolute opacity-40 z-2" />
      <Image
        className="h-72 w-screen object-cover object-bottom z-1"
        src={bournsBuilding}
        alt="bourns building"
      />
      <div className="h-22"/>
    </>
  );
};

export default PastProjects;
