import Image from "next/image";
import bournsBuilding from "@/public/Bourns_Building.png";
const Welcome = () => {
  return (
    <>
      <div className="md:h-screen flex">
        <Image
          src={bournsBuilding}
          width="100%"
          height="100%"
          alt="bourns building"
          objectFit="cover"
          className="max-h-min bg-cover flex shrink-0 lg:-mt-96 lg:-mb-16"
        />
      </div>
      <div className="w-4/5 md:w-3/5 lg:w-2/5 absolute left-[13%] top-[18%] bg-[#fff] bg-opacity-80">
        <p className="text-purple-10 font-bold lg:text-4xl lg:ml-[13%] lg:mt-[12%] md:text-2xl md:ml-9 md:mt-7 text-xl ml-8 mt-6">
          UCR Senior Designs
        </p>

        <p className="text-purple-10 lg:text-xl text-left lg:mx-[15%] lg:mt-5 md:text-lg md:ml-10 md:mr-9 md:mt-5 text-sm ml-9 mr-5 mt-3">
          Explore a myriad of hands-on learning experiences in our Senior Design
          projects developing cutting-edge solutions for real-world industry
          problems.
        </p>

        <button className="bg-buttons-orange text-white font-bold rounded-md hover:-translate-y-0.5 lg:mx-[15%] lg:p-2 lg:mb-5 lg:text-lg lg:w-1/4 md:mx-10 md:p-2 md:mb-3 md:text-md md:w-1/4 ml-9 py-1.5 mb-4 text-xs w-1/3">
          PROJECTS
        </button>
      </div>
    </>
  );
};

export default Welcome;
