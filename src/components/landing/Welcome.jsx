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
      <div className="lg:w-2/5 lg:h-2/5 bg-[#fff] bg-opacity-80 absolute top-1/4 lg:left-20 w-1/2 left-20 h-1/3">
        <p className="text-purple-10 lg:text-4xl font-bold lg:ml-20 lg:mt-20 text-2xl ml-9 mt-7">
          UCR Senior Designs
        </p>
        <p className="text-purple-10 lg:text-xl text-left lg:mx-20 ml-10 mr-3">
          Vulputate mi sut amet mauris commodo quis. Curabitur gravida arcu ac
          tortor dignissim convallis arnean et tortor.
        </p>
        <button className="w-1/4 bg-buttons-orange lg:mx-20 mx-[17%] text-white font-bold p-2 lg:mb-5 rounded-md hover:-translate-y-0.5">
          PROJECTS
        </button>
      </div>
    </>
  );
};

export default Welcome;
