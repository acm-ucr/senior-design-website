import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";

const PastProjects = () => {
  return (
    <div>
      <div className="h-72 w-full absolute flex justify-center">
        <p className="text-3xl font-black text-white absolute bottom-0 z-10">
          PROJECTS
        </p>
      </div>
      <div className="h-72 w-full bg-black absolute opacity-40 z-2" />
      <Image
        className="h-72 w-screen object-cover z-1"
        src={bournsBuilding}
        alt="bourns building"
      />
    </div>
  );
};

export default PastProjects;
