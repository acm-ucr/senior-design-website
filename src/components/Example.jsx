import Image from "next/image";
import image1 from "@/public/image1.png";

const Example = () => {
  return (
    <div className="w-full h-full mx-auto bg-senior-blue-100">
      image below:
      <Image src={image1} className="w-1/2 m-auto" alt="image" />
    </div>
  );
};

export default Example;
