import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";
const Welcome = () => {
  return (
    <div className="flex items-center justify-center max-h-screen max-w-full">
      <div className="max-h-min lg:-mt-96  lg:-mb-16">
        <Image
          src={bournsBuilding}
          width="100%"
          height="100%"
          alt="bourns building"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Welcome;
