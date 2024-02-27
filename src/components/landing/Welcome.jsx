import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";
const Welcome = () => {
  return (
    <>
      <Image
        src={bournsBuilding}
        width="100%"
        height="100%"
        alt="bourns building"
      />
      <div className="w-2/5 bg-[#fff] bg-opacity-80 absolute top-1/4 left-20">
        <p className="text-purple-10 text-4xl font-bold ml-20 mt-20">
          UCR Senior Designs
        </p>
        <p className="text-purple-10 text-xl text-left mx-20">
          Vulputate mi sut amet mauris commodo quis. Curabitur gravida arcu ac
          tortor dignissim convallis arnean et tortor.
        </p>
        <button className="w-1/4 bg-buttons-orange mx-20 text-white font-bold p-2 mb-5 rounded-md hover:-translate-y-0.5">
          PROJECTS
        </button>
      </div>
    </>
  );
};

export default Welcome;
