import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";
const Welcome = () => {
  return (
    <Image
      src={bournsBuilding}
      width="100%"
      height="100%"
      alt="bourns building"
    />
  );
};

export default Welcome;
