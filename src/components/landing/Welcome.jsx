import Image from "next/image";
import Bourns_Building from "@/public/Bourns_Building.png";
const Welcome = () => {
  return (
    <Image src={Bourns_Building} width="100%" height="100%" alt="bourns building" />
  );
};

export default Welcome;
