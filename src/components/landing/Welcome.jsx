import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";
const Welcome = () => {
  return (
    <div className="flex items-center justify-center max-h-96 max-w-full">
      <Image
        src={bournsBuilding}
        width="100%"
        height="100%"
        alt="bourns building"
      />
    </div>
  );
};

export default Welcome;
