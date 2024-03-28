import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";

const PastProjects = () => {
  return (
    <>
      <div className="h-80 w-screen absolute flex justify-center">
        <p className="text-xl font-black text-white absolute bottom-2 z-50">
          PROJECTS
        </p>
      </div>
      <div className="h-80 w-full bg-black absolute opacity-65 z-20" />
      <Image
        className="h-80 w-full object-center object-cover z-10"
        src={bournsBuilding}
        alt="bourns building"
      />
    </>
  );
};

export default PastProjects;
